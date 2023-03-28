import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from '../../actions/index'
import Card from "../../components/Card/Card";
import style from './Home.module.css'
 

const Home = () => {
    const allvideogames = useSelector((state)=>state.videogames)

    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(getVideogames())
    },[])
    // cuando se monta, que haga el dispatch
    //   useEffect()   - useDispatch()
    return (
        <>
        <h1>Esta es la vista de Home</h1>
        <div className={style.cards}>
        {
        allvideogames.map(ele=>{
            return(
                <Card
                key={ele.id}
                id={ele.id}
                Nombre={ele.Nombre}
                Plataformas={ele.Plataformas}
                Imagen={ele.Imagen}
                FechaDeLanzamiento={ele.FechaDeLanzamiento}
                Rating={ele.Rating}
                Generos={ele.Generos}
                />
            )
        })
        }
        </div>
        </>
    )
}

export default Home;
