import React from 'react';
import './TodoList.css';
import { Todo } from '../model/todo.model';

interface TodoListProps {
  items: Todo[];
  removeFunction: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, removeFunction }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.text}</p>
            <button onClick={removeFunction.bind(null, item.id)}>Remove</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
