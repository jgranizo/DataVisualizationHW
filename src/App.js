import React, {Component} from 'react';
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name:"Name 1",
      email: "abc@gmail.com",
    }
  }


  inputChange=(event)=>{
    this.setState({name:event.target.value});
    console.log(this.state.name);

  }
/*

  constructor(props){
    super(props)
    this.state = {counter: 0, input_value: ''}
  }
  componentDidMount(){
    console.log("ComponentDidMount has been called. ")

  }
  //
  componentDidUpdate(){
    console.log("ComponentDIdUpdate has been called")
  }
  increment =  ()=>{
    let x = this.state.counter + 1;
   this.setState({counter:x})
   console.log("Input has changed!")
  }

    increment2 = (event)=>{
      console.log(event.target.value)
      this.setState({input_value: event.target.value})
    }
*/
  render(){
  /*  console.log('Render() has been called')
    return (
      <div>
        <div>
          <button onClick={this.increment}>Click</button>
        <h1>Count is: {this.state.counter}</h1>
      <input type='text' value = {this.state.input_value} onChange={this.increment2}>
      
      </input>
        </div>
      </div>
    )
  }*/


return(
  <div>Hello 
    <input type='text' onChange={this.inputChange}></input>
     <p>{ this.state.name}</p>
  </div>
  
);

}
}

export default App

//render is being called when App is initialized in index.js
//everything inside of render is being rendered
//App is a state, with two variables
//counter and input value,
// with methods to keep track of both.