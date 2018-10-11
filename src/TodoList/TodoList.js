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

    doneTodo(key, item, event){
        // first log is the "this"
        console.log(event)
        // key associate to the todo or "li"
        console.log('key: '+ key)
        // your todo added
        console.log('todo: '+ item)
        let currentState = this.state.completed;
        console.log("current state: "+currentState)
        this.setState({
            completed: !currentState
        }, ()=> console.log("new state: "+ this.state.completed));
    }



    renderTodos(){
        return this.state.items.map((item) => {
            let ideaID = this.state.items.indexOf(item);
            let newKey = ideaID+'_'+uuidv1();
            return(
                <ListGroupItem as='li' className={`text-left ${this.state.completed ? 'list-group-item-success': null}`} key={newKey}>
                    {item} 
                    <FontAwesomeIcon 
                        name='fas fa-window-close' 
                        className='close' 
                        onClick={this.deleteTodo.bind(this, item)}
                    />
                    <FontAwesomeIcon 
                        name={`fas fa-check-square`} 
                        className={`close`}
                        onClick={this.doneTodo.bind(this, newKey, item)} 
                    />
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