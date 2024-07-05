import React from 'react';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <h1>Accueil</h1>
            <Countries/>
        </div>
    );
};

export default Home;