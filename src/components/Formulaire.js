import React, { useState } from 'react';
import { validateEmail, validateName, validatePostalCode, validateDateOfBirth, validateCity } from '../utils/validation';
import { toast } from 'react-toastify';
import './Formulaire.css';
import ListeInscrit from './ListeInscrit';

const Formulaire = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [ville, setVille] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validation des champs
        if (!validateName(nom) || !validateName(prenom) || !validateCity(ville)) {
            setError('Nom, prénom ou ville invalide');
            return;
        }
        if (!validateEmail(email)) {
            setError('Email invalide');
            return;
        }
        if (!validateDateOfBirth(dateNaissance)) {
            setError('Vous devez avoir au moins 18 ans');
            return;
        }
        if (!validatePostalCode(codePostal)) {
            setError('Code postal invalide');
            return;
        }

        // Ajout de l'utilisateur
        const newUser = { nom, prenom, email, dateNaissance, ville, codePostal };
        setUsers([...users, newUser]);
        toast.success('Inscription réussie');

        // Réinitialisation des champs
        setNom('');
        setPrenom('');
        setEmail('');
        setDateNaissance('');
        setVille('');
        setCodePostal('');
    };

    const isFormValid = nom && prenom && email && dateNaissance && ville && codePostal;

    return (
        <div className="form">
                 <h2>Formulaire d'inscription</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
                <p style={{ color: 'red' }}>{!validateName(nom) && nom && "Nom invalide"}</p>
                
                <input
                    type="text"
                    placeholder="Prénom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />
                <p style={{ color: 'red' }}>{!validateName(prenom) && prenom && "Prénom invalide"}</p>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p style={{ color: 'red' }}>{!validateEmail(email) && email && "Email invalide"}</p>

                <input
                    type="date"
                    placeholder="Date"
                    value={dateNaissance}
                    onChange={(e) => setDateNaissance(e.target.value)}
                />
                <p style={{ color: 'red' }}>{!validateDateOfBirth(dateNaissance) && dateNaissance && "Vous devez avoir au moins 18 ans"}</p>

                <input
                    type="text"
                    placeholder="Ville "
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                />
                <p style={{ color: 'red' }}>{!validateCity(ville) && ville && "Ville invalide"}</p>

                <input
                    type="text"
                    placeholder="Code Postal"
                    value={codePostal}
                    onChange={(e) => setCodePostal(e.target.value)}
                />
                <p style={{ color: 'red' }}>{!validatePostalCode(codePostal) && codePostal && "Code postal invalide"}</p>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={!isFormValid}>S'inscrire</button>
            </form>
            <ListeInscrit liste = {users}/>
        </div>
    );
};

export default Formulaire;
