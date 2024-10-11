import React from 'react';

const ListeInscrit = ({ liste }) => {
    return (
        <>
            <h2>Liste des inscrits</h2>
            <ul>
                {liste.map((user, index) => (
                    <li key={index}>{`${user.nom} ${user.prenom} - ${user.email}`}</li>
                ))}
            </ul>
        </>
    );
};

export default ListeInscrit;
