import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';

function Recipeitem(props) {

  let recipeinfo= [props.id,props.title,props.img];
  return (
    
    <ListGroup.Item>
      <img src={props.img} alt={props.title +"'s image"} width="165" style={{ marginLeft: '3em', display: 'inline-block' }}/>
      <Link  to= {"/recipes/"+ props.id} onClick= {()=> props.ChangeId3(recipeinfo)} style={{ color: '#232629' , marginLeft: '5rem', display: 'inline-block',fontSize: '120%', fontWeight: '500'}}>
        {props.title}
      </Link>
    </ListGroup.Item>
  );
}

export default Recipeitem;