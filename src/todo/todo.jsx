import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'

//import form e list
import TodoForm from './todoForm'
import TodoList from './todoList'


const URL = process.env.API_URL ? process.env.API_URL: 'http://localhost:3003/api/todoact'

class Todo extends Component {
    constructor(props){
        super(props)
        this.addTask = this.addTask.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.checkTask = this.checkTask.bind(this)
        this.unCheckTask = this.unCheckTask.bind(this)
        this.searchTask = this.searchTask.bind(this)
        this.clearTask = this.clearTask.bind(this)

        this.state = {description: '', list : []}

        this.readTasks()
    }

    readTasks(description = ''){
        const search = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(response => {
            this.setState({...this.state,
                description,
                list: response.data})
        })
    }

    searchTask() {
        this.readTasks(this.state.description)
    }

    deleteTask(todo){
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => this.readTasks(this.state.description))
    }

    checkTask(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true} )
        .then(resp => this.readTasks(this.state.description))
    }

    unCheckTask(todo){
            axios.put(`${URL}/${todo._id}`, {...todo, done: false} )
            .then(resp => this.readTasks(this.state.description))
    }

    clearTask(){
        this.readTasks()
    }

    addTask(){

        //adicionar tarefa
        const description = this.state.description
        axios.post(URL, {description: description})
        .then(response=> {
            this.readTasks();
          })
          .catch(error => {
            console.log(error.response);
          });
    }

    changeInput(e) {
        this.setState({...this.state, description:e.target.value })
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas'  small='Cadastro'/>
                <TodoForm  addTask={this.addTask} 
                 description={this.state.description} 
                 change={this.changeInput}
                 searchTask={this.searchTask}
                 clearTask={this.checkTask}
                 />
                <TodoList list={this.state.list}
                    delete={this.deleteTask}
                    check={this.checkTask}
                    unCheck={this.unCheckTask}
                    />
            </div>
        )
    }
}

export default Todo