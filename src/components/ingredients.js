import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Ingredientitem from './ingredientitem';

function Ingredients(props) {
  const [finalPrice, setfinalPrice] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Items, setItems] = useState([]);
  const data = Object.values(Items);
  const Apikey = process.env.REACT_APP_SPOONACULAR_TOKEN; // Set variable (SPOONACULAR_TOKEN) as Api-Key

  useEffect(() => {
        
    fetch(`https://api.spoonacular.com/recipes/${String(props.recipeId[0])}/priceBreakdownWidget.json?apiKey=${Apikey}`)
    .then((res) => res.json())
    .then(
        (result) => {
            setIsLoaded(true);
            setItems(result.ingredients);
            setfinalPrice(result.totalCost);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
            // console.log(error);
        }
    );
}, [])
  console.log(Items);
  
  return (
    <div className='container mt-4'>
      <Link  to= {"/"} style={{ color: '#232629' , marginLeft: '5rem', display: 'inline-block', fontSize: '120%', fontWeight: '500'}}>
        Back
      </Link>
      <div style={{ display: 'flex', marginTop: '2.5em'}}>
      <ListGroup.Item >
      <img src={props.recipeId[2]} alt={props.recipeId[1] +"'s image"}  style={{  width: '180px' ,height: '180px', position: 'relative' , overflow: 'hidden',
    borderRadius: '50%' , marginLeft: '3em', display: 'inline-block'}}/>
      <h2 style={{ color: '#232629' , marginLeft: '5rem', maxWidth: '18em' , display: 'inline-block', fontSize: '180%', verticalAlign: 'middle', overflowWrap: 'break-word'}}>
        {props.recipeId[1]}
      </h2>
      <Button variant="outline-dark px-4" size="lg" style={{ marginLeft: '6em' }}>Rs {finalPrice}</Button>
    </ListGroup.Item>
    </div>
     <h4 className='mt-4' style={{display: 'block',  marginLeft: '4rem', fontSize: '180%', fontWeight: '400'}}>Ingredients</h4>
     <div style={{ margin: '2rem 4rem 2rem 4rem'}}>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Ingredient</th>
          <th>System</th>
          <th>Units</th>
          <th>Unit Value</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {data.map((item) => {
                return (
                    <Ingredientitem name={item.name} price={item.price} img={item.image} amount={item.amount}/>
                );
            })}
      </tbody>
     </Table>
     </div>
    </div>

  );
}

export default Ingredients;