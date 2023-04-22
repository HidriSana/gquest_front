import React from 'react';
import Navigation from '../components/Navigation';
import CreateQuest from '../components/CreateQuest';
import Membership from '../components/Membership';


const Administration = () => {
    return (
        <div>
            <Navigation/>
            <h1>Administration</h1>
            <CreateQuest/>
            <Membership/>
        </div>
    );
};

export default Administration;