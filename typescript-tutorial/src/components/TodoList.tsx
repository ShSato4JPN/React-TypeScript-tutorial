import React from 'react'
import { Todo } from '../model'
import './style.css'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<string>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return <div className="todos">{}</div>
}

export default TodoList
