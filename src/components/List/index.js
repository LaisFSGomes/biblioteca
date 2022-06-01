import './style.css';
const List = (props) =>
  props.list?.map((item) => (
    <div className="item" key={parseInt(item.objectID)}>
      <h2>{item?.title || "Sem Título"}</h2>
      <h3> {item?.author || "Sem Autor"} </h3>
      <h3><a href={item?.url || ""}> {item?.url || "Sem Link"} </a> </h3>
    </div>
  ));

export default List;