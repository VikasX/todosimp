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
 this.buthandle=this.buthandle.bind(this);

  }

changehandle(e){
this.setState( {term : e.target.value})

}

buthandle(event){
  alert("hello");
  event.preventDefault();
}


  render(){
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.changehandle} value={this.state.term}/>
          <button onClick={this.buthandle}>Click</button>
        </form>
        <Greet name="vikas"/>
        <Clascomp/>
      </div>
    );

  }
  
}

export default App;
