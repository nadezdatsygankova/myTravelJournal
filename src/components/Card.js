import LogoPlace from '../iconPlace.svg'


export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt='card' />
            </div>
            <div className='card-description'>
                <div className='card-des-location'>
                    <img src={LogoPlace} />
                    <h1>{props.item.location}</h1>
                    <a href={props.item.googleMapsUrl}>View on Google Maps </a>
                </div>
                <div>
                    <h2 className='locationName'>{props.item.location}</h2>
                    <div className='date'>
                        <p>{props.item.startDate}</p>
                        <p> - </p>
                        <p>{props.item.endDate}</p>
                    </div>
                </div>
                <div className='description'>
                    <p>{props.item.description}</p>
                </div>
                <div>

                </div>


            </div>
        </div>
    )
}