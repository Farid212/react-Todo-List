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

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            items: [],
            addClass: ''
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
            userInput: '',
            items: [...this.state.items, this.state.userInput],
            addClass: false
        }, ()=> console.log(this.state.items));
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
        const array = this.state.items;
        const i = array.indexOf(event);
        let tempoEvent = array[i];
        console.log(tempoEvent);
        let currentSituation = this.state.addClass;
        this.setState({
            addClass: !currentSituation
        });
    }

    renderTodos(){
        let cssTemporaire = '';
        if(this.state.addClass){
            cssTemporaire = ["list-group-item-success"];
        }
        
        return this.state.items.map((item) => {
            return(
                <ListGroupItem className={`text-left ${cssTemporaire}`} key={item}>
                    {item} 
                    <FontAwesomeIcon name='fas fa-window-close' className='close' onClick={this.deleteTodo.bind(this, item)}/>
                    <FontAwesomeIcon name='fas fa-check-square' className='close' onClick={this.doneTodo.bind(this, item)} />
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
                <ListGroup>
                    {this.renderTodos()}
                </ListGroup>
            </Container>
        );
    }
}

export default TodoList;