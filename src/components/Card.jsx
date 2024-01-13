export default function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <img src={props.image} alt="foto" />
      <button onClick={props.onClick}>X</button>
    </div>
  );
}
