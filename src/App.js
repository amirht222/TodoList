import { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoTitle) => {
    setTodos((prevTodos) => {
      const updatedTodos = [
        ...prevTodos,
        { id: Math.random().toString(), title: todoTitle },
      ];
      return updatedTodos;
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return updatedTodos;
    });
  };

  return (
    <div className='app'>
      <h1>What's the plan today?!</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
