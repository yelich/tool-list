//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components



function Home(){
    
    return (<h1>todos</h1>);
}

function ToDoList(){
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <h2 className="todos">Todos</h2>
                    <ul className="list-group">
                        <form>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="What needs to be done?"></input>
                        </form>
    
                        <li className="list-group-item">Make the bed</li>
                        <li className="list-group-item">Walk the dog</li>
                        <li className="list-group-item">sfdsdf</li>
                    </ul>
                </div>
                   
            </div>
        </div>

        );
}



ReactDOM.render(
    <ToDoList />,
    document.querySelector('#app')
);