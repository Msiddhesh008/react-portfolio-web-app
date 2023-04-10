import React, { Component } from 'react'
import "./TodoList.css"

class TodoList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       edit: false,
       delete: false,
       editedTask: this.props.listItem

    }

    this.isEdit = this.isEdit.bind(this)
    this.isDelete = this.isDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  isEdit(){
    this.setState({
      edit: !this.state.edit
    })

  }

  isDelete(){
    this.props.isDelete(this.props.id)
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleClick(e){
    e.preventDefault()
    this.props.isEdit(this.state.editedTask, this.props.id)
    this.setState({
      edit: !this.state.edit
    })

  }

  render() {
    
    if(this.state.edit){
      return(
      <div className='todoList'>

      <input 
      name="editedTask"
      onChange={this.handleChange}
      className='list'
      value={this.state.editedTask} />

      <button 
      className='save--btn'
      type='submit'
      onClick={this.handleClick}>SAVE</button>

    </div>)
    }else{

    return (
      <div className='todoList'>
        <span 
        className='list'
        style={{textDecoration: this.props.isDone ? "line-through" : "none"}}
        onClick={this.props.strikeThrough}>
          {this.props.listItem}
        </span>
        <div className='icons'>
        <i className="bi bi-pencil-fill me-1" onClick={this.isEdit}></i>
        <i className="bi bi-trash-fill ms-1 " onClick={this.isDelete}></i>
        </div>
      </div>
    )
  }
  }
}
export default TodoList
