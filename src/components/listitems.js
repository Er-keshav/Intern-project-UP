import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Recipeitem from './recipesitem';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Listing(props){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const data = Object.values(items);
    
    useEffect(() => {
        if(String(props.searchParam)===""){
        if(String(props.filterParam) ==="All"){
            fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=f95e8d4f1cd34118bd35895c78baf742")
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
            fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=f95e8d4f1cd34118bd35895c78baf742&cuisine=" + String(props.filterParam))
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
            fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=f95e8d4f1cd34118bd35895c78baf742&titleMatch=" + String(props.searchParam))
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
            fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=f95e8d4f1cd34118bd35895c78baf742&cuisine=" + String(props.filterParam) + "&titleMatch="+ String(props.searchParam))
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
            <ListGroup >
                
            {data.map((item) => {
                console.log(item);
                return (
                    <Recipeitem title={item.title} img={item.image}/>
                );
            })}
            </ListGroup>
    </Container>
);

}