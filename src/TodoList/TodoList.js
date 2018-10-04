import React, {Component } from 'react';
import $ from 'jquery';

class TodoList extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            items: []
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

    doneTodo(item){
        console.log(item);
    }

    renderTodos(){
        return this.state.items.map((item) => {
            return(
                <ul className='list-group-item text-left' key={item}>
                    {item} 
                    <button className='close' onClick={this.deleteTodo.bind(this, item)}>
                    <i className="far fa-times-circle"></i>
                    </button>
                    <button className='close'>
                        <i className="fas fa-check" onClick={this.doneTodo.bind(this, item)}></i>
                    </button>
                </ul>
            );
        });
    }

    render(){
        return(
            <div className='container'>
                <h1>To do List</h1>
                <form className='form-group'>
                    <input 
                    className='form-control text-center mb-2'
                    value={this.state.userInput} 
                    type='text' 
                    placeholder='add todo'
                    onChange={this.onChange.bind(this)} 
                    />
                    <button className='btn btn-primary mb-2' onClick={this.addTodo.bind(this)}>add</button>
                </form>
                <div className='list-group'>
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;