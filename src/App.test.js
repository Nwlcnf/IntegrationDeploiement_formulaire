import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Formulaire d'inscription/i);
    expect(titleElement).toBeInTheDocument();
});
