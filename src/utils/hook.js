import {useRef, useEffect, useCallback, useState} from 'react';
import {Dimensions} from 'react-native';

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMount = func => useEffect(() => func(), []);

export const useMountedState = (): (() => boolean) => {
  const mountedRef = useRef();
  // Basically the same as "useDidMount" because it has no dependencies
  useEffect(() => {
    mountedRef.current = true;

    return () => {
      // The cleanup function of useEffect is called by React on unmount
      mountedRef.current = false;
    };
  }, []);
  return useCallback(() => mountedRef.current, []);
};

export const useCancelablePromise = () => {
  // Use our just created custom hook to keep track of the mounted state
  const isMounted = useMountedState();

  // Create our function that accepts a promise
  // Note the second parameter is a callback for onCancel. You might need this in rare cases
  return useCallback(
    (promise: Promise, onCancel?: () => void) =>
      // Wrap the given promise in a new promise
      new Promise()((resolve, reject) => {
        promise
          .then(result => {
            // Only resolve the returned promise if mounted
            if (isMounted()) {
              // Resolve with the result of the wrapped promise
              resolve(result);
            }
          })
          .catch(error => {
            // Only reject the returned promise if mounted
            if (isMounted()) {
              // Reject with the error of the wrapped promise
              reject(error);
            }
          })
          .finally(() => {
            // Call the onCancel callback if not mounted
            if (!isMounted() && onCancel) {
              onCancel();
            }
          });
      }),
    [isMounted],
  );
};

export const useAnimationFrame = (callback, isEnd = false) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = useCallback(
    time => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback],
  );

  const checkLoad = useCallback(() => {
    if (!isEnd) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = undefined;
    }
  }, [animate, isEnd]);

  useEffect(() => {
    checkLoad();
    return () => {
      cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = undefined;
    };
  }, [checkLoad]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = undefined;
    };
  }, []);
};

export function useOrientation() {
  const [orientation, setOrientation] = useState('PORTRAIT');

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
  }, []);

  return orientation;
}
