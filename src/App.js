import React from 'react'
import './App.css'
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './home';
import Search from './search';


const App = () => {


    return (
        <div className="App">
        
        <BrowserRouter>
          
          <Route exact path='/' component={Home}></Route>
          <Route path='/search' component={Search}></Route>
       
        </BrowserRouter>
    
    
        </div>
      );
    


}


export default App;
