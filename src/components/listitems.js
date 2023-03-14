import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Recipeitem from './recipesitem';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Listing(props){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const data = Object.values(items);
    const Apikey = process.env.REACT_APP_SPOONACULAR_TOKEN; // Set variable (SPOONACULAR_TOKEN) as Api-Key
    
    useEffect(() => {
        if(String(props.searchParam)===""){
        if(String(props.filterParam) ==="All"){
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Apikey}` )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    // console.log(error);
                }
            );
        }
        else{
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Apikey}&cuisine=${String(props.filterParam)}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    // console.log(error);
                }
            );
        }
    }
    else{
        if(props.filterParam =="All"){
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Apikey}&titleMatch=${String(props.searchParam)}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    // console.log(error);
                }
            );
        }
        else{
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Apikey}&cuisine=${String(props.filterParam)}&titleMatch=${String(props.searchParam)}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    // console.log(error);
                }
            );
        }
    }
}, [props.filterParam,props.searchParam])


return (
    <Container>
            <ListGroup style={{ paddingBottom: '4rem' }} >
            <ListGroup.Item>
            <h5 style={{ marginLeft: '50px', display: 'inline-block' }}>Image</h5>
            <h5 style={{ color: '#232629' , marginLeft: '11.5rem', display: 'inline-block', fontWeight: '500'}}>
                Recipe's Name
            </h5>
            </ListGroup.Item>
            {data.map((item) => {
                return (
                    <Recipeitem id= {item.id} title={item.title} img={item.image} ChangeId3= {(Id)=> props.ChangeId2(Id)}/>
                );
            })}
            </ListGroup>
    </Container>
);
}