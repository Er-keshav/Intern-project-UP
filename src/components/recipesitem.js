
function Recipeitem(props) {
  return (
    
    <>
      <h1>
        {props.title}
      </h1>
      <img src={props.img} alt={props.title +"'s image"} />
    </>
  );
}

export default Recipeitem;