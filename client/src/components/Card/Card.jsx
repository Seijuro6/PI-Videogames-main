import style from './Card.module.css';

const Card = ({ Nombre, Plataformas, Imagen, FechaDeLanzamiento, Rating, Generos, id }) => {
  console.log({ Nombre, Plataformas, Imagen, FechaDeLanzamiento, Rating, Generos, id });
  return (
    <div className={style.card}>
      <p>Nombre: {Nombre.Nombre}</p>
      <div>Plataformas = {Plataformas}</div>
      <div>Imagen = {Imagen}</div>
      <div>FechaDeLanzamiento = {FechaDeLanzamiento}</div>
      <div>Rating = {Rating}</div>
      <div>Generos = {Generos}</div>
      <div>id = {id}</div>
    </div>
  );
};

export default Card;






