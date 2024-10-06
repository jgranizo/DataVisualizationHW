import React, {Component} from 'react';

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            toDo:[],
            inputText:'',
            l:props.prop1,
            t:props.prop2,
        
        }
    }


    handleInputChange = (e) =>{
        this.setState({inputText:e.target.value})
    }

    handleButtonClick = ()=>{
        this.setState({toDo:[...this.state.toDo,this.state.inputText]})
       
    }


    render(){
        console.log(this.props.prop1)
        return (
            <div>
                <input type="text" onChange={this.handleInputChange}></input>
                <button onClick={this.handleButtonClick}>Add ToDo</button>
                {
                    this.state.toDo.map(item=>{
                        return <div>
                            <p>{item}</p>
                            <button onClick={()=>this.setState({toDo:this.state.toDo.filter(element=>item!==element)})}>Remove</button>
                            </div>
                    })
                }
            </div>
        );
    }
}
export default ToDoList;