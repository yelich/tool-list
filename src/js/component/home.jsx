import React from 'react';
import {Element} from './element.jsx';
//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    

constructor(){
    super();
    this.state={
        "tasks": [
            "wash the car",
            "walk the dog",
            "go to gym",
            "go to the bank",
            "buy stamps",
            "pay bills" ]
};
    
}


handleClickNewTask(e){
    

if (e.charCode == 13) {
  let tempState = this.state;
  tempState.tasks.push(e.target.value);
  this.setState(tempState);  
  e.target.value ="";
  
}
}

render(){

      
        var listTasks = this.state.tasks.map( (element, index) => {
            return <Element key={index} taskTitle={element}/>;
        });


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <h2 className="todos">Todos</h2>
                    
                    <ul className="list-group">
                        <li className="addTask">
                            <input type="text" className="addtolist" onKeyPress={(event) => this.handleClickNewTask(event)} id="formGroupExampleInput2" placeholder="What needs to be done?"></input>
                        </li>
                        <li className="list-group-item">Make the bed</li>
                        <li className="list-group-item">Walk the dog</li>
                        <li className="list-group-item">paint the bathroom</li>
                        {listTasks}
                        
                    
                    </ul>
                </div>
                
            </div>
        </div>

        );

}
}


