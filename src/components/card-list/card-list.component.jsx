import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ( { monsters } ) => {
    console.log('render from CardList');
    return (
        <div className="card-list">
            {
                monsters.map( (monster) => {
                    // const {name, email, id} = monster;
                    return (
                        <Card monster={monster}/>
                    )}
                )
            }
        </div>
    );
}

export default CardList;