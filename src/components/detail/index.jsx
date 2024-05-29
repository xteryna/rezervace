export const Detail = ({number, dates, guests, meals, price, checkin, checkout}) => {
    return (
        <div className="summary__detail">
            <h3>Detail rezervace</h3>
            <div className="summary__number">Ćíslo: {number}</div>
            <div className="summary__dates">Pobyt: {dates.from} - {dates.to}</div>
            <div className="summary__guests">Hosté: {guests}</div>
            <div className="summary__services">Stravovávní: {meals}</div>
            <div className="summary__room-total">{price} Kč</div>
            <div className="summary__check-in">Check-in: {checkin} do {checkout}</div>
            <div className="summary__check-out">
            Check-out: 17.6.2026 do 10:00
            </div>
        </div>
    )
}