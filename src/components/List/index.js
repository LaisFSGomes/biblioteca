import Book from '../Book/index.js'

const List = (props) =>{
  const lista = props.list;
  const filtro = lista?.filter(val => {
    if (val.title) return val;
    return null;
  });

  return(  
    filtro?.map((item) => (
      <div className='item' key={parseInt(item.objectID)}>
        <Book item = {item} />
      </div>
    ))
  );
}
export default List;