import { useState } from 'react';
import Form from 'react-bootstrap/Form';


function Cusine(props) {
    
    const [Cuisines, setCuisines] = useState(
        [
            "All","African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"
        ]
    );
    return (
        <Form.Select className="select" variant="outline-secondary" width= "220%"
                onChange={(e) => {
                    props.onChange(e.target.value);
                }} 
                >
                {Cuisines.map((Cuisines) => {
                    if(Cuisines==="All"){
                        return (
                            <option value="All">Select Cuisine</option>
                        );
                    }
                    else{
                    return (
                        <option value={Cuisines}>{Cuisines}</option>
                    );
                    }
                })}
        </Form.Select>
    );
}

export default Cusine;

