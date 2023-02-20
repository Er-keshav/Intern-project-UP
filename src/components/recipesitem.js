import ListGroup from 'react-bootstrap/ListGroup';

function Recipeitem(props) {
  return (
    
    <ListGroup.Item>
      
      <h6 style={{ marginRight: '100px', display: 'inline-block'}}>
        {props.title}
      </h6>
      <img src={props.img} alt={props.title +"'s image"} width="150" height="125" style={{ display: 'inline-block' }}/>
    </ListGroup.Item>
  );
}

export default Recipeitem;