import Card from '../Card/Card'
import style from './CardsContainer.module.css'

const CardsContainer = () => {
    const users = []

    // const videogames = useSelector(state=>state.videogames)
    return(
        <div className={style.container}>
            {users.map(user =>{
                return <Card 
                    Id = {user.id}
                    name = {user.name}
                    phone = {user.phone}
                    email = {user.email}
                />
            })}
        </div>
    )
}

export default CardsContainer