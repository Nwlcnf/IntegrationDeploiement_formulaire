import React from 'react';
import Formulaire from './components/Formulaire';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <h1>Formulaire d'inscription</h1>
            <Formulaire />
            <ToastContainer />
        </div>
    );
};

export default App;
