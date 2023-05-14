import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './model/todo.model';

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addToList = (newItem: Todo) => {
    setTodoList((prevTodos) => [...prevTodos, newItem]);
  };

  const removeFromList = (itemId: string) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((el) => el.id !== itemId);
    });
  };

  return (
    <div className='App'>
      <NewTodo addFunction={addToList} list={todoList} />
      <TodoList items={todoList} removeFunction={removeFromList} />
    </div>
  );
};

export default App;
