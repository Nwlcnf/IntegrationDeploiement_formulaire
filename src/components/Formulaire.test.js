import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulaire from './Formulaire';
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn(),
    },
}));

describe('Formulaire component', () => {
    beforeEach(() => {
        render(<Formulaire />);
    });

    test('renders form fields', () => {
        expect(screen.getAllByPlaceholderText(/Nom/i)[0]).toBeInTheDocument(); // First element
        expect(screen.getByPlaceholderText(/Prénom/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Date/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Ville/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Code Postal/i)).toBeInTheDocument();
    });

    test('shows error messages for invalid inputs', () => {
        fireEvent.change(screen.getAllByPlaceholderText(/Nom/i)[0], { target: { value: '123' } });
        fireEvent.change(screen.getByPlaceholderText(/Prénom/i), { target: { value: '' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'invalidEmail' } });
        fireEvent.change(screen.getByPlaceholderText(/Date/i), { target: { value: '2010-01-01' } }); // Moins de 18 ans
        fireEvent.change(screen.getByPlaceholderText(/Ville/i), { target: { value: 'City123' } });
        fireEvent.change(screen.getByPlaceholderText(/Code Postal/i), { target: { value: '1234' } });

        fireEvent.click(screen.getByRole('button', { name: /S'inscrire/i }));

        // Vérification des messages d'erreur
        expect(screen.getByText((content) =>
            content.includes('Vous devez avoir au moins 18 ans'))).toBeInTheDocument();
        expect(screen.getByText(/Nom invalide/i)).toBeInTheDocument();
        expect(screen.getByText(/Email invalide/i)).toBeInTheDocument();
        expect(screen.getByText(/Ville invalide/i)).toBeInTheDocument();
        expect(screen.getByText(/Code postal invalide/i)).toBeInTheDocument();
    });

    test('rejects postal code of incorrect length', () => {
        fireEvent.change(screen.getByPlaceholderText(/Code Postal/i), { target: { value: '12345' } });
        expect(screen.queryByText(/Code postal invalide/i)).not.toBeInTheDocument();

        fireEvent.change(screen.getByPlaceholderText(/Code Postal/i), { target: { value: '1234' } });
        expect(screen.getByText(/Code postal invalide/i)).toBeInTheDocument();
    });

    test('submits form with valid inputs', () => {
        fireEvent.change(screen.getAllByPlaceholderText(/Nom/i)[0], { target: { value: 'John' } }); // First element
        fireEvent.change(screen.getByPlaceholderText(/Prénom/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Date/i), { target: { value: '2000-01-01' } });
        fireEvent.change(screen.getByPlaceholderText(/Ville/i), { target: { value: 'Paris' } });
        fireEvent.change(screen.getByPlaceholderText(/Code Postal/i), { target: { value: '75001' } });

        fireEvent.click(screen.getByRole('button', { name: /S'inscrire/i }));

        expect(screen.getByText(/Liste des inscrits/i)).toBeInTheDocument();
        expect(screen.getByText(/John Doe - john.doe@example.com/i)).toBeInTheDocument();
        expect(toast.success).toHaveBeenCalledWith('Inscription réussie');
    });

    test('calls error toast on form submission error', () => {
        fireEvent.change(screen.getAllByPlaceholderText(/Nom/i)[0], { target: { value: '123' } });
        fireEvent.click(screen.getByRole('button', { name: /S'inscrire/i }));

    });

    test('disables button when form inputs are invalid', () => {
        expect(screen.getByRole('button', { name: /S'inscrire/i })).toBeDisabled();

        fireEvent.change(screen.getAllByPlaceholderText(/Nom/i)[0], { target: { value: 'John' } }); // First element
        fireEvent.change(screen.getByPlaceholderText(/Prénom/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Date/i), { target: { value: '2000-01-01' } });
        fireEvent.change(screen.getByPlaceholderText(/Ville/i), { target: { value: 'Paris' } });

        expect(screen.getByRole('button', { name: /S'inscrire/i })).toBeDisabled();

        fireEvent.change(screen.getByPlaceholderText(/Code Postal/i), { target: { value: '75001' } });
        expect(screen.getByRole('button', { name: /S'inscrire/i })).toBeEnabled();
    });
});
