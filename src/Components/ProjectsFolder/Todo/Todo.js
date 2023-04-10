import React, { Component } from 'react'
import TodoList from './Components/TodoList'
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"

var today  = new Date();

class Todo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      listItem: "",
      showListItem: [
        { id: uuidv4(), listItem: "Breakfast", isDone: false},
        { id: uuidv4(), listItem: "Lunch", isDone: false},
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.creatNewList = this.creatNewList.bind(this)
    this.isEdit = this.isEdit.bind(this)
    this.isDelete = this.isDelete.bind(this)
  }
  
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const newTask = { id: uuidv4(), listItem: this.state.listItem, isDone: false };
    this.creatNewList(newTask) 
    this.setState({
      listItem:""
    })
  }

  creatNewList(newList){
    this.setState((state) => ({
      showListItem: [ ...state.showListItem, newList ]
    }))

    console.log(newList);

  }

  isDelete(id){
    this.setState({
      showListItem: this.state.showListItem.filter(eachList => eachList.id !== id)
    });
  }

  isEdit(editedTask, id){
    const updateEditTask = this.state.showListItem.map(listItem => {
      if(listItem.id === id){
        return{...listItem, listItem: editedTask }
      }
      return listItem
    })

    this.setState({
      showListItem: updateEditTask
    })
  }

  isDone(id){
    const updateIsDone = this.state.showListItem.map(listItem => {
      if(listItem.id === id){
        return{...listItem, isDone: !listItem.isDone }
      }
      return listItem
    })
    this.setState({
      showListItem: updateIsDone
    })
  }

  render() {
    return (
      <section className="container-fluid">
        <div className='col-lg-4 col-md-6 col-12 todo'>
        <h1>TASKS TODAY</h1>

        <h3>{today.toLocaleDateString("en-US")}</h3>

        {this.state.showListItem.map((eachList) => (
          <TodoList 
          isDone={eachList.isDone} 
          listItem={eachList.listItem} 
          key={eachList.id}
          id={eachList.id}
          isEdit={this.isEdit}
          isDelete={this.isDelete}
          strikeThrough={() => this.isDone(eachList.id)}
          />))}
        
        <form onSubmit={this.handleSubmit}>
            <input
            className="task--input" 
            type="text" 
            name='listItem' 
            value={this.state.listItem} 
            placeholder="task"
            onChange={this.handleChange} / >
            <button type="submit" className='button'>ADD</button>
        </form>

        </div>
      </section>
    )
  }
}
export default Todo
