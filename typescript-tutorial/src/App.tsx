import React, { useState } from 'react'
import { isDefaultClause } from 'typescript'
import { isDataView } from 'util/types'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      // ロジックの説明
      //　[...todos, { object }] で既に登録されているデータの末尾に新たデータを登録している。
      //　。..todos　⇨　既に登録されているデータをスプレッドで抜き出し
      //　{object} ⇨　新たなオブジェクトを登録する
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* <todoList todos={todos} setTodos={setTodos} /> */}
      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}
    </div>
  )
}

export default App
