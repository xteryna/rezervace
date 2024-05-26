export const Services = ({parking, breakfast, wellness, wifi}) => {
    return(
        <div className="summary__services">
            <h3>Doplňkové služby</h3>
            <div className="summary__service">Parkování: {parking}</div>
            <div className="summary__service">Snídaně:  {breakfast}</div>
            <div className="summary__service">Wellness: {wellness}</div>
            <div className="summary__service">
            Wifi: {wifi}
            </div>
        </div>
    )
}