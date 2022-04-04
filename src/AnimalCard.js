import './AnimalCard.css'

const AnimalCard = (props) => {
    return (
        <div id={props.id} class="card">
            <img srcSet={props.srcUrl}/>
            <div class="cardFooter">
                {props.children}
            </div>
        </div>
    );
};

export default AnimalCard;