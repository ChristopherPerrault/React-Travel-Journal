import Globe from "../images/globe-icon.png";

export default function Header() {
  return (
    <div className="header--container">
      <img src={Globe} alt="globe icon" />
      <h2>My Travel Journal</h2>
    </div>
  );
}
