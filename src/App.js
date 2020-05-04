import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Clascomp from './components/Classcomp';

class App extends Component {
  
  constructor(){
    super();

    this.state={
      term : "abc"
    }
    
 this.changehandle=this.changehandle.bind(this);

  }

changehandle(e){
this.setState( {term : e.target.value})

}

buthandle(e){

}


  render(){
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.changehandle} value={this.state.term}/>
          <button onClick={() => this.buthandle.bind(this)}>Click</button>
        </form>
        <Greet name="vikas"/>
        <Clascomp/>
      </div>
    );

  }
  
}

export default App;
