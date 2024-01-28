import AppWithProvider from '../../App.tsx';
import render from '@testing-library/react-native';

describe('App', () => {
  test('should render correctly', () => {
    const wrapper = render(<AppWithProvider />);

    wrapper.getByTestID('app');
  });
});
