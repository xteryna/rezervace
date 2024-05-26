export const Head  = ({photo, name, adress, city, rating, room}) => {
    return(
        <div className="summary__head">
            <img className="summary__photo" src={photo}/>
            <div className="summary__head-property">
                <h3 className="summary__name">{name}</h3>
                <div className="summary__adress">{adress}</div>
                <div className="summary__city">{city}</div>
                <div className="summary__rating">{rating}</div>
            </div>
            <div className="summary__head-room">
                <h3 className="summary__name">{room.name}</h3>
                <div className="summary__room-type">{room.type}</div>
            <div className="summary__room-price">{room.price}</div>
            </div>
        </div>
    )
}
