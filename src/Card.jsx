function Card(props) {
    return (
        <div className='card'>
            {/* Use img prop */}
            <img className="card-image" src={props.img} alt="The image could not be displayed" />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-content">{props.content}</p>
            <p className='card-price'>{props.price}</p>
            <button className='card-button'>BUY NOW</button>
        </div>
    );
}

export default Card;
