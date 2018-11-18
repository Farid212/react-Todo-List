import React, { Component } from 'react';
import { 
    Container,
    ListGroup,
    Button,
    Form,
    FormControl,
 } from 'react-bootstrap';
import uuidv1 from 'uuid/v1';
import ItemContent from './ItemContent';

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            items: [],
        }
        this.deleteTodo = this.deleteTodo.bind(this)
        this.doneTodo = this.doneTodo.bind(this)
    }


    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    deleteTodo(item){
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    doneTodo(item){
        const array = this.state.items;
        const index = array.indexOf(item);
        array[index].isCompleted = !array[index].isCompleted;
        this.setState({
            items: array
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, {id: this.state.userInput+uuidv1(),value: this.state.userInput,isCompleted: false}],
        })        
    }

    renderTodos(){
        return this.state.items.map((item, index) => {
            return(
                <ItemContent key={index} item={item} doneTodo={this.doneTodo} deleteTodo={this.deleteTodo}/>
            )
        })
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