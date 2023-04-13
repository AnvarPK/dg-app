import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '.';
import store from '../../redux/store';

describe('Home page', () => {
    test('renders learn react link', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider >
        );
        const endDiv = screen.getByText('end-of-data');
        expect(endDiv).toBeInTheDocument();
    });
})
