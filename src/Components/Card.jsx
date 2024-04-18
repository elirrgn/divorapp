function Card(props) {

    return(
        <div className="card">
            <h3>
                {props.name}
            </h3>
            <p className="card-restaurant-type">
                {props.type}
            </p>
            <img src={props.imagesrc} alt="" draggable="false" />
            <p className="card-restaurant-text">
                {props.text}
            </p>
        </div>
    );
}

export default Card