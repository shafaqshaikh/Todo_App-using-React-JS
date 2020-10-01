import React  , {useState}from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {GlobalProvider} from './context/GlobalState'
import './App.css';
import Home from './components/Home'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return(
  <div style={{maxWidth:"30rem" , margin:"4rem auto"}}>
  <GlobalProvider>
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/add" component={AddTask}/>
      <Route path="/edit/:id" component={EditTask}/>
    </Switch>
  </Router>
  </GlobalProvider>
    </div>
  );
}

export default App;
