import React, { Component } from 'react';

import { 
    ListGroupItem,

} from 'react-bootstrap';
import FontAwesomeIcon from 'react-fontawesome';
import TodoList from './TodoList';


class ItemContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            completed: false
        }
    }

    deleteTodo(event){
       let parent = event.currentTarget.parentNode;
       parent.className = "d-none"
    }



    doneTodo(){
        // console.log(this.state.completed)
        this.setState({
            completed: !this.state.completed
        });
    }

    render(){
        
            return (
                <ListGroupItem as='li' className={`text-left ${this.state.completed ? 'list-group-item-success': null}`}>
                    <FontAwesomeIcon 
                        name={`fas fa-window-close`}
                        className={`close`}
                        onClick={this.deleteTodo.bind(this)}
                    />
                    <FontAwesomeIcon 
                        name={`fas fa-check-square`} 
                        className={`close`}
                        onClick={this.doneTodo.bind(this)}
                    />
                </ListGroupItem>
            )
          
    }
}

export default ItemContent
