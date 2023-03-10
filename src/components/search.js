// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useCallback } from 'react';


function Search(props) {

  const debounce= (func)=>{
    let timer;
    return function (...args){
      const context= this;
      if(timer){ clearTimeout(timer);}
      timer = setTimeout(() => { timer=null; func.apply(context, args); }, 500);
    };
  }

  const processChange = useCallback(
    debounce((e) => props.onChange(e.target.value)) ,[] )
   
  return (
          <Container>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Recipes"
              className="me-2"
              aria-label="Search"
              onChange={processChange}
            />
          </Form>
          </Container>
  );
}

export default Search;