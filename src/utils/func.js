export const roundUp = (vl) => {
  switch (vl.toString().length) {
    case 1: {
      return Math.ceil(vl / 4) * 4;
    }
    case 2: {
      return Math.ceil(vl / 20) * 20;
    }
    case 3: {
      return Math.ceil(vl / 100) * 100;
    }
    case 4: {
      return Math.ceil(vl / 1000) * 1000;
    }
    case 5: {
      return Math.ceil(vl / 10000) * 10000;
    }
    case 6: {
      return Math.ceil(vl / 100000) * 100000;
    }
    case 7: {
      return Math.ceil(vl / 1000000) * 1000000;
    }
    default:
      return vl;
  }
};

export function handleErr(error) {
  if (error.response) {
    // Request made and server responded
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
  }
}
