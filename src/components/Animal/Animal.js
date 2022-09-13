import './Animal.css';

export default function Animal(props) {
  console.log(props.top);
  return (
    <div className="animal" style={{ top: props.top, left: props.left, backgroundImage: `url(${props.name}.svg)` }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`}></img>
      <div className="name">{props.name}</div> 
      <div>{props.says}</div>
    </div>
  );
}
