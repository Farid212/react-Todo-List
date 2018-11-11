import React, { Component } from 'react';

import { 
    ListGroupItem,

} from 'react-bootstrap';
import FontAwesomeIcon from 'react-fontawesome';


class ItemContent extends Component{
    constructor(){
        super();

        this.state = {
            completed: false
        }
    }

    deleteTodo(event){
        // console.log(event);
        let parent = event.currentTarget.parentNode;
        // console.log(parent)
        parent.className = "d-none"
    }



    doneTodo(){
        // console.log(this.state.completed)
        this.setState({
            completed: !this.state.completed
        });
    }

    render(){
        const {value} = this.props;
        
            return (
                <ListGroupItem as='li' className={`text-left ${this.state.completed ? 'list-group-item-success': null}`}>
                    {value}
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
