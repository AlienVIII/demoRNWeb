module.exports = (api) => {
  const babelEnv = api.env();
  const plugins = [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ios.tsx",
          ".android.tsx",
          ".jsx",
          ".js",
          ".json",
          ".tsx",
          ".ts",
        ],
        alias: {
          test: "./test",
        },
      },
    ],
  ];
  if (babelEnv !== "development") {
    // 'transform-remove-console' production env eslint version <6
    // plugins.push(['transform-remove-console', {exclude: ['error', 'warn']}]);
  }
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins,
  };
};
