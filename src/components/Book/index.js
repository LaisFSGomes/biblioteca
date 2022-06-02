import './style.css';
const Book = (props) => {
  return (
    <div className="item" key={parseInt(props.item?.objectID)}>
      <h2>{props.item?.title || "Sem Título"}</h2>
      <h3> {props.item?.author || "Sem Autor"} </h3>
      <h3><a href={props.item?.url || ""}> {props.item?.url || "Sem Link"} </a> </h3>
    </div>
  );
}

export default Book;