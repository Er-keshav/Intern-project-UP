import { useState } from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Ingredients from './components/ingredients';
import Recipes from './components/recipes';

function App() {
    const [recipeId, setrecipeId] = useState([]);
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Recipes ChangeId= {(Id)=> setrecipeId(Id)}/>} />
        <Route path={"/recipes/"+String(recipeId[0])} element= {<Ingredients  recipeId={recipeId}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;