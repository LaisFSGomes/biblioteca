import Book from '../Book/index.js'

const List = (props) =>{
  return(  
    props.list?.map((item) => (
      <div className="item" key={parseInt(item.objectID)}>
        <Book item = {item} />
      </div>
    ))
  );
}
export default List;