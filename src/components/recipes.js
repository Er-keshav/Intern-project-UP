import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './search';
import Cuisine from './cuisines';
import Listing from './listitems';
import { useState } from 'react';

function Recipes(props) {
  const [filterParam, setFilterParam] = useState(["All"]);
  const [searchParam, setsearchParam] = useState([""]);

  // function filterCuisine(filterParam){
  //    console.log("filterParam");
  // }
  // console.log(filterParam , searchParam);
  return (
    <>
    <Container className="mt-10">
    <Row >
        <Col xs={5}><Search onChange={value => setsearchParam(value)} /></Col>
        <Col xs={2}><Cuisine onChange={value => setFilterParam(value)} /></Col>
      </Row>
    </Container> 
    <div className="mt-4">
    <Listing filterParam={filterParam} searchParam={searchParam} ChangeId2= {(Id)=> props.ChangeId(Id)}/>
    </div>
    </>
  );
}

export default Recipes;
