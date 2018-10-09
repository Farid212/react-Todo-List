import React, { Component } from 'react';
import { 
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Form,
    FormGroup,
    FormControl,
    ButtonToolbar
    
 } from 'react-bootstrap';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoList extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            items: [],
            addClass: false
        }

    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        }, ()=> console.log(this.state.userInput));
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
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

    doneTodo(){
    // event if I do receive the item it is always same result all li receive the changement of state and than the "cssTemporaire" is applied in all li element
        this.setState({
            addClass: !this.state.addClass
        });
        console.log(this.state.addClass)
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
                    <Button className='close' onClick={this.deleteTodo.bind(this, item)}>
                        <i className="far fa-times-circle"></i>
                    </Button>
                    <Button className='close'>
                        <i className='fas fa-check' onClick={this.doneTodo.bind(this)} />
                    </Button>
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