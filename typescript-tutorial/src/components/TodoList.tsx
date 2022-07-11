import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './style.css'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        // <li key={index}>{todo.todo}</li>
      ))}
    </div>
  )
}

export default TodoList
