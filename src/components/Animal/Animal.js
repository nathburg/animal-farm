export default function Animal(props) {
  return (
    <div className="animal-card">
        Name: {props.name} Type: {props.type}
    </div>
  );
}
