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
            <div className="row align-items-start">
                <div className="row align-items-center">
                    
                    <div className="col">
                        <h2 className="todos">Todos</h2>
                        <ul className="list-group">
                            <li className="list-group-item">What needs to be done?</li>
                            <li className="list-group-item">Make the bed</li>
                            <li className="list-group-item">Walk the dog</li>
                            <li className="list-group-item">sfdsdf</li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
        );
}



ReactDOM.render(
    <ToDoList />,
    document.querySelector('#app')
);