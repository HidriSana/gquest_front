import React from 'react';
import Navigation from '../components/Navigation';
import CreateQuest from '../components/CreateQuest';
import Membership from '../components/Membership';
import '../Styles/Home.scss';


const Administration = () => {
    return (
        <div >
            <Navigation/>
            <h2>Administration</h2>
            <div className='admin'>
                <CreateQuest/>
                <Membership/>
            </div>
        </div>
    );
};

export default Administration;