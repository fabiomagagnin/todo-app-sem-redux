import React from 'react'
//import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//const URL = 'http://localhost:3003/api/todos'

export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)  

/*

    Todos os metodos foram removidos depois da adição do redux

    constructor(props) {
        super(props)

        this.handleAdd = this.handleAdd.bind(this) // permite usar o this, dentro do handleAdd
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
        this.state = {description:'Initial state fm', list: []}
        this.refresh()

    }

    refresh(description = '') {

        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    // change do input
    handleChange(e) {
        console.log('change')
        this.setState({...this.state, description: e.target.value})


    }

    handleAdd() {
        // console.log(this)
        console.log(this.state.description)

        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => this.refresh())

    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.description))
    }    
*/

