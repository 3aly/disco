/* eslint-disable no-undef */

// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
// import '@testing-library/jest-native/extend-expect';

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-query', () => ({
//   useQuery: jest.fn().mockReturnValue({
//     data: null, // Replace with your mock data
//     error: null,
//     isLoading: false,
//   }),x
//   useMutation: jest.fn().mockImplementation(() => ({
//     mutate: jest.fn(),
//   })),
// }));
// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
// }));
// jest.mock('@react-native-clipboard/clipboard', () => mockClipboard);

// jest.mock('@react-native-clipboard/clipboard', () => () => {
//   return {};
// });

// jest.mock('@react-native-async-storage/async-storage', () =>
//   require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
// );

// jest.mock('redux-persist', () => ({
//   persistStore: jest.fn(),
//   persistReducer: jest.fn(),
// }));

jest.mock('@reduxjs/toolkit', () => ({
  ...jest.requireActual('@reduxjs/toolkit'),
  combineReducers: jest.fn(),
  configureStore: jest.fn().mockReturnValue({
    getState: jest.fn().mockReturnValue({
      user: {
        isProduction: null,
      },
    }),
    subscribe: jest.fn(),
  }),
}));

// jest.mock('@react-native-firebase/analytics', () => () => {
//   return {
//     logEvent: jest.fn(),
//     logLogin: jest.fn(),
//     setUserId: jest.fn(),
//   };
// });

// jest.mock('@react-native-firebase/messaging', () => () => {
//   return {
//     hasPermission: jest.fn(() => Promise.resolve(true)),
//     subscribeToTopic: jest.fn(),
//     unsubscribeFromTopic: jest.fn(),
//     requestPermission: jest.fn(() => Promise.resolve(true)),
//     getToken: jest.fn(() => Promise.resolve('myMockToken')),
//   };
// });

// jest.mock('react-native-file-viewer', () => () => {
//   return {
//     open: jest.fn(() => Promise.resolve(true)),
//   };
// });

// jest.mock('react-native-barcode-builder', () => () => {
//   return {};
// });

// jest.mock('react-native-blob-util', () => () => {
//   return {};
// });

// jest.mock('react-native-fs', () => {
//   return {
//     mkdir: jest.fn(),
//     moveFile: jest.fn(),
//     copyFile: jest.fn(),
//     pathForBundle: jest.fn(),
//     pathForGroup: jest.fn(),
//     getFSInfo: jest.fn(),
//     getAllExternalFilesDirs: jest.fn(),
//     unlink: jest.fn(),
//     exists: jest.fn(),
//     stopDownload: jest.fn(),
//     resumeDownload: jest.fn(),
//     isResumable: jest.fn(),
//     stopUpload: jest.fn(),
//     completeHandlerIOS: jest.fn(),
//     readDir: jest.fn(),
//     readDirAssets: jest.fn(),
//     existsAssets: jest.fn(),
//     readdir: jest.fn(),
//     setReadable: jest.fn(),
//     stat: jest.fn(),
//     readFile: jest.fn(),
//     read: jest.fn(),
//     readFileAssets: jest.fn(),
//     hash: jest.fn(),
//     copyFileAssets: jest.fn(),
//     copyFileAssetsIOS: jest.fn(),
//     copyAssetsVideoIOS: jest.fn(),
//     writeFile: jest.fn(),
//     appendFile: jest.fn(),
//     write: jest.fn(),
//     downloadFile: jest.fn(),
//     uploadFiles: jest.fn(),
//     touch: jest.fn(),
//     MainBundlePath: jest.fn(),
//     CachesDirectoryPath: jest.fn(),
//     DocumentDirectoryPath: jest.fn(),
//     ExternalDirectoryPath: jest.fn(),
//     ExternalStorageDirectoryPath: jest.fn(),
//     TemporaryDirectoryPath: jest.fn(),
//     LibraryDirectoryPath: jest.fn(),
//     PicturesDirectoryPath: jest.fn(),
//   };
// });

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));
// jest.mock('@react-navigation/bottom-tabs', () => ({
//   createBottomTabNavigator: jest.fn(),
// }));

// jest.mock('@react-navigation/drawer', () => ({
//   createDrawerNavigator: jest.fn(),
// }));

// global.window = {};

// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({
//     t: key => key, // Simple implementation for testing
//   }),
//   use: jest.fn(),
// }));

// jest.mock('react-native-document-picker', () => ({default: jest.fn()}));
