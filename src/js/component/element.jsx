import React from 'react';
import PropTypes from 'prop-types';
export class Element extends React.Component{

//   constructor(){
//       super();
//       this.state.
//   }
    render(){
        return(
            <li className="list-group-item"> {this.props.taskTitle}</li>
            );
            
    }
    
}

Element.propTypes= {
    taskTitle: PropTypes.string
};