import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Ingredientitem(props) {
    const [System, setSystem] = useState(
        [
            "metric","us"
        ]
    );
    const [currentSystem, setcurrentSystem] = useState("metric");
    // console.log({currentSystem});
    // console.log('metric'== String(currentSystem));
  return (
    
    <tr>            
     <td> <img src={props.img} alt={props.name +"'s image"} width="165" style={{ marginLeft: '3em', display: 'inline-block' }}/></td>
      <td>{props.name} </td>
                    <td>
                <Form.Select className="select" variant="outline-secondary" width= "220%"
                onChange={(e) => {
                    setcurrentSystem(e.target.value);
                }} 
                >
                {System.map((System) => {
                    
                    return (
                        <option value={System}>{System}</option>
                    );
                })}
                </Form.Select> </td>
                
            <td>{'metric'=== String(currentSystem)?props.amount.metric.unit===''?'pcs':props.amount.metric.unit:props.amount.us.unit===''?'pcs':props.amount.us.unit}</td>
            <td>{'metric'=== String(currentSystem)?props.amount.metric.value:props.amount.us.value}</td>       
            <td>{props.price}</td>
    </tr>
  );
}

export default Ingredientitem;