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

    render(){
        const {item, doneTodo, deleteTodo} = this.props;
        
            return (
                <ListGroupItem as='li' className={`text-left ${item.isCompleted ? 'list-group-item-success': null}`}>
                    {item.value}
                    <FontAwesomeIcon 
                        name={`fas fa-window-close`}
                        className={`close`}
                        onClick={()=>{deleteTodo(item)}}
                    />
                    <FontAwesomeIcon 
                        name={`fas fa-check-square`} 
                        className={`close`}
                        onClick={()=>{doneTodo(item)}}
                    />
                </ListGroupItem>
            )
          
    }
}

export default ItemContent
