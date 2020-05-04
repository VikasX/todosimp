import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Clascomp from './components/Classcomp';

class App extends Component {
  
  render(){
    return (
      <div className="App">
  
        <Greet name="vikas"/>
        <Clascomp/>
      </div>
    );

  }
  
}

export default App;
