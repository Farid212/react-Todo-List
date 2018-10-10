import React, { Component } from 'react';
import { 
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Form,
    FormControl,
 } from 'react-bootstrap';
import FontAwesomeIcon from 'react-fontawesome';
import uuidv1 from 'uuid/v1';

class TodoList extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            items: [],
            completed: false
        }
    }


    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            id: this.state.userInput+uuidv1(),
            userInput: '',
            items: [...this.state.items, this.state.userInput],
        })        
    }

   

    deleteTodo(item){
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    doneTodo(event){
        this.setState({
            completed: !this.state.completed
        });
    }



    renderTodos(){
        let cssTemporaire = '';
        if(this.state.completed){
            cssTemporaire = ["list-group-item-success"];
        }
        
        return this.state.items.map((item) => {
            return(
                <ListGroupItem as='li' className={`text-left ${cssTemporaire}`} key={item+uuidv1()}>
                    {item} 
                    <FontAwesomeIcon name='fas fa-window-close' className='close' onClick={this.deleteTodo.bind(this, item)}/>
                    <FontAwesomeIcon name='fas fa-check-square' className='close' onClick={this.doneTodo.bind(this, item+uuidv1())} />
                </ListGroupItem>
            );
        });
    }

    render(){
        return(
            <Container>
                <h1>To do List</h1>
                <Form>
                    <FormControl
                        autoFocus
                        className='text-center mb-2 '
                        value={this.state.userInput} 
                        type='text' 
                        placeholder='add todo'
                        onChange={this.onChange.bind(this)} 
                    >
                    </FormControl>
                    <Button varriant='primary' type='submit' className='mb-2' onClick={this.addTodo.bind(this)}>add</Button>
                </Form>
                <ListGroup as='ul'>
                    {this.renderTodos()}
                </ListGroup>
            </Container>
        );
    }
}

export default TodoList;