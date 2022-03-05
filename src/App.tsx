
// 56:17
import React, {useState} from 'react';
import { DEFAULT_ECDH_CURVE } from 'tls';
import "./App.css"
import InputField from './components/InputField'
import Todo from "./model";
import TodoList from "./components/TodoList"

// Functional Components
const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo:todo, isDone:false}])
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading"> Taskify </span>
      <InputField todo = {todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos = {todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
