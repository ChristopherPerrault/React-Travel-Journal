import LocationPin from "../images/locationpin.png";

const linkTxt = "View in Google Maps";

export default function Card(props) {
  return (
    <div className="card--container">
      <img
        src={require(`../images/${props.item.image}`)}
        className="card--image"
        alt="card"
      />
      <div className="card--content">
        <p className="card--location">
          <img src={LocationPin} alt="pin icon" className="card--pin" />
          {props.item.location.toUpperCase()}
          <a href={props.item.googleMapsUrl} title="View in Google Maps">
            {linkTxt}
          </a>
        </p>
        <h1>{props.item.title}</h1>
        <p className="card--year">Visited in {props.item.year}</p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
}
