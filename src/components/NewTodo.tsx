import React, { useRef } from 'react';
import './NewTodo.css';
import { Todo } from '../model/todo.model';

interface NewTodoProps {
  addFunction: (obj: Todo) => void;
  list: Todo[];
}

const NewTodo: React.FC<NewTodoProps> = ({ addFunction, list }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    const lastElem = list.at(-1);
    const newElemId = lastElem ? (+lastElem.id + 1).toString() : '1';
    addFunction({ id: newElemId, text: enteredText });
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo text</label>
        <input ref={inputRef} type='text' id='todo-text'></input>
      </div>
      <button type='submit'>Add todo</button>
    </form>
  );
};

export default NewTodo;
