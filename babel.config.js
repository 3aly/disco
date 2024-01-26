module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '/components': './src/components',
          '/utils': './src/utils',
          '/navigation': './src/navigation',
          '/screens': './src/screens',
          '/types': './src/types',
          '/constants': './src/constants',
          '/assets': './src/assets',
        },
      },
    ],
  ],
};
