import React, {Component} from 'react';
class ColorChanger extends Component{
    constructor(props){
      super(props);
      this.state = {
        color:'white',
      };
    }
    handleChangeColor = () => {
      const colors = ['red','blue','green','yellow','orange'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.setState({color:randomColor});
  };
  
  
    render(){
      return (
        <div style={{backgroundColor:this.state.color,padding:'20px'}}>
          <button onClick={this.handleChangeColor}>Changing Color</button>
        </div>
      )
    }
  
  
  }
  export default ColorChanger
  