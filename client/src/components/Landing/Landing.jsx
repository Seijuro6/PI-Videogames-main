import React from 'react';
import { Link } from "react-router-dom";
import style from '../Landing/Landing.module.css'

const Landing = () => {
    return (
        <>
        <div className={style.Landing}>
            <h1>Esta es la vista de Landing</h1>
            <Link to = '/home'>
                <button className={style.boton}>GAMES</button>
            </Link>
        </div>
        </>
    )
}

export default Landing;
