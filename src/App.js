import React, {useState} from 'react';
import LoginForm from './components/Login';
import TodoForm from './components/Todo';
import TodoItem from './components/Items';
import "./App.css";
import PageNotFound from './PageNotFound';

function App() {

  const adminUser = {
    username: "admin",
    password:"admin1234"
  }
  
  const [user, setUser] = useState({name:"", username:""});
  const [error, setError] = useState("");


  const Login = details => {
    console.log("details");

    if(details.username === adminUser.username && details.password === adminUser.password){
      console.log("Logged in");
      
      setUser({
        name: details.name,
        username: details.username
      })
    }
    else{
      <PageNotFound/>
    }
  }

  const Logout = () => {
    setUser({name:"", username:""})
  }

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false, important: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  let sortedTodos = todos.sort((a, b) => b.important - a.important)

  return (
    <div className="todo-app">
     {(user.username !="") ? (
       <div className="welcome">
         <h2>Welcome, list all your today's tasks!</h2>
         <TodoForm addTodo={addTodo}/>
       {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
        )
       })}
        <br></br>
         <button id='btnlogout' onClick={Logout}>Logout</button>
       </div>
     ):(
      <LoginForm Login={Login} error={error} />
     )
     }
    </div>
  );
}

export default App;
