export default function Card({
  id,
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  image,
}) {
  return (
    <div>
      <img src={image} alt={name} />
      <p>
        <b>Id:</b> {id}
      </p>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>HP:</b> {hp}
      </p>
      <p>
        <b>Attack:</b> {attack}
      </p>
      <p>
        <b>Defense:</b> {defense}
      </p>
      <p>
        <b>Speed:</b> {speed}
      </p>
      <p>
        <b>Height:</b> {height}
      </p>
      <p>
        <b>Weight:</b> {weight}
      </p>
    </div>
  );
}
