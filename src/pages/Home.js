import React from 'react';
import '../Styles/Home.scss';
import Login from './Login'
import { Link } from 'react-router-dom';


const Home = () => {
    
    const handleEvent = () => {

        console.log(`
█▀ ▀█▀ █▀█ █▀▀ ▀█▀ █▀▀ █░█
▄█ ░█░ █▀▄ ██▄ ░█░ █▄▄ █▀█
        `)
        console.log(`
█▀▀ █▀█ █▄░█ █▀ █▀█ █░░ █▀▀
█▄▄ █▄█ █░▀█ ▄█ █▄█ █▄▄ ██▄
        `)
        console.log(`
█▄█ █▀█ █░█  █░█ █▀▀   █▀▀ █▀█ █▀▄▀█ █▀▀   ▀█▀ █░█ █ █▀   █▀▀ ▄▀█ █▀█
░█░ █▄█ █▄█  ▀▄▀ ██▄   █▄▄ █▄█ █░▀░█ ██▄   ░█░ █▀█ █ ▄█   █▀░ █▀█ █▀▄⠀⠀⠀⠀⠀⠀⠀⠀⠀                                                                       
        `);
        console.log(`
▀█▀ █▀█   █▀ █▀▀ █▀▀   █▀▄▀█ █▄█   █░█░█ █▀█ █▀█ █▄▀
░█░ █▄█   ▄█ ██▄ ██▄   █░▀░█ ░█░   ▀▄▀▄▀ █▄█ █▀▄ █░█
        `)
        console.log(`
▀█▀ █░█ ▄▀█ █▄░█ █▄▀   █▄█ █▀█ █░█
░█░ █▀█ █▀█ █░▀█ █░█   ░█░ █▄█ █▄█
        `)
        console.log(`
        ⢀⣠⣤⣤⣶⣶⣶⣶⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣤⣾⣿⣿⠿⠟⠛⠛⠛⠛⠻⠿⣿⣿⣷⣤⡀⠀⠀⠀⠀
⠀⠀⠀⣴⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣦⠀⠀⠀
⠀⢀⣾⣿⡿⠁⠀⠀⣴⣦⣄⠀⠀⠀⠀⠀⣀⣤⣶⡀⠈⢿⣿⣷⡀⠀
⠀⣾⣿⡟⠁⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠈⢻⣿⣷⠀
⢠⣿⣿⠁⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠈⣿⣿⡄
⢸⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⣿⣿⡇  
⠘⣿⣿⡦⠤⠒⠒⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠧⠤⢴⣿⣿⠃
⠀⢿⣿⣧⡀⠀⢤⡀⠙⠻⠿⣿⣿⣿⣿⣿⡿⠟⠋⠁⠀⢀⣼⣿⡿⠀
⠀⠈⢿⣿⣷⡀⠈⢿⣦⣤⣾⣿⣿⣿⣿⣿⣷⣄⠀⠀⢀⣾⣿⡿⠁⠀
⠀⠀⠀⠻⣿⣿⣦⣄⡉⣿⣿⢿⣿⠉⢻⣿⢿⣿⣠⣴⣿⣿⠟⠀⠀⠀
⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣧⣼⣿⣤⣾⣷⣶⣿⣿⡿⠛⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠿⠿⠿⠿⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀
        `)
        console.log(`
█▀▀ █ ▀█▀ █░█ █░█ █▄▄   █░█ █ █▀▄ █▀█ █ █▀ ▄▀█ █▄░█ ▄▀█
█▄█ █ ░█░ █▀█ █▄█ █▄█   █▀█ █ █▄▀ █▀▄ █ ▄█ █▀█ █░▀█ █▀█
        `)
        console.log(`
▄▀█ █▄░█ █▀▄   █▀█ █▀▀ █▀▄▀█ █▀▀ █▀▄▀█ █▄▄ █▀▀ █▀█
█▀█ █░▀█ █▄▀   █▀▄ ██▄ █░▀░█ ██▄ █░▀░█ █▄█ ██▄ █▀▄
        `);
        console.log(`
█ █▄░█ █░░ █ █▄░█ █▀▀ █▄▄ █░░ █▀█ █▀▀ █▄▀
█ █░▀█ █▄▄ █ █░▀█ ██▄ █▄█ █▄▄ █▄█ █▄▄ █░█
                                                          
        `)
        console.log(`
█ █▀   █░█ █▄░█ █▀▄ █▀▀ █▀█ █▀█ ▄▀█ ▀█▀ █▀▀ █▀▄
█ ▄█   █▄█ █░▀█ █▄▀ ██▄ █▀▄ █▀▄ █▀█ ░█░ ██▄ █▄▀                                                                              
        `)
      };
    
    return (
        <section className="home">
            <h1  className="main-title">GQUEST</h1> 
            <Login/>
            <h2>
                Rejoins ta guilde, complète des quêtes, montre ta valeur et transforme tes points d'expérience en récompense
            </h2>
            <div className = "hero">
                <img onLoad={handleEvent} className='card' src="/svg/exclamation-mark-svgrepo-com.svg" alt="Exclamation mark for pending quest"/>
                <img className='card' src="/svg/question-mark-svgrepo-com.svg" alt="Question mark for completing quest"/>
                <img className='card' src="/svg/favorites-svgrepo-com.svg" alt="Star  for experience after completing a quest"/>
                <img className='card' src="/svg/gift-svgrepo-com.svg" alt="Gift for redeeming experience points"/>
            </div>
            <div className="copyright">
                    Aplication réalisée par <Link to="https://drive.google.com/file/d/1UDTMZGcJBKOkIEGIsNpMWqk5VRfmWdD2/view?usp=sharing"  target="_blank" download>Sana Hidri</Link>
            </div>
        </section>
    );
};

export default Home;