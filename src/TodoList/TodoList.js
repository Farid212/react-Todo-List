import React, {Component } from 'react';

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

    doneTodo(item){
    // event if I do receive the item it is always same result all li receive the changement of state and than the "cssTemporaire" is applied in all li element
        this.setState({
            addClass: !this.state.addClass
        });
        console.log(this.state.addClass)
        // return item
    }

    renderTodos(){
        let cssTemporaire = '';
        if(this.state.addClass){
            cssTemporaire = ["list-group-item-success"];
        }
        return this.state.items.map((item) => {
            return(
                <li className={`list-group-item ${cssTemporaire}`} key={item}>
                    {item} 
                    <button className='close' onClick={this.deleteTodo.bind(this, item)}>
                    <i className="far fa-times-circle"></i>
                    </button>
                    <button className='close'>
                        <i className='fas fa-check' onClick={this.doneTodo.bind(this)}></i>
                    </button>
                </li>
            );
        });
    }

    render(){
        return(
            <div className='container'>
                <h1>To do List</h1>
                <form className='form-group'>
                    <input 
                    autoFocus
                    className='form-control text-center mb-2 '
                    value={this.state.userInput} 
                    type='text' 
                    placeholder='add todo'
                    onChange={this.onChange.bind(this)} 
                    />
                    <button className='btn btn-primary mb-2' onClick={this.addTodo.bind(this)}>add</button>
                </form>
                <ul className='list-group'>
                    {this.renderTodos()}
                </ul>
            </div>
        );
    }
}

export default TodoList;