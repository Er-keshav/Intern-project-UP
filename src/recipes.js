import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './search';
import Cuisine from './filter';
import Listing from './components/listitems';
import { useState } from 'react';

function Recipes() {
  const [filterParam, setFilterParam] = useState(["All"]);
  const [searchParam, setsearchParam] = useState([""]);

  // function filterCuisine(filterParam){
  //    console.log("filterParam");
  // }
  console.log(filterParam , searchParam);
  return (
    <>
    <Container className="mt-10">
    <Row >
        <Col xs={5}><Search onChange={value => setsearchParam(value)} /></Col>
        <Col xs={2}><Cuisine onChange={value => setFilterParam(value)} /></Col>
      </Row>
    </Container> 
    <div className="mt-4">
    <Listing filterParam={filterParam} searchParam={searchParam}/>
    </div>
    </>
  );
}

export default Recipes;
