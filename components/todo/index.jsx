import { useState } from 'react';

class Item {
  id = Math.random();
  checked = false;
  constructor(text) {
    Object.assign(this, { text })//this.text = text;
    // return this
  }
  toggleChecked() {
    this.checked = !this.checked;
    return this;
  }
}

export function ToDoList() {
  const
    [list, setList] = useState([new Item('купить продукты'), new Item('проверить почту')]);
  return <>
    <h1>ToDo List</h1>
    <Form
      addItem={text => setList(prev => [...prev, new Item(text)])}
    />
    <Button
      onClick={() => setList(prev => prev.filter(({ checked }) => !checked))}>
      Delete all completed
    </Button>
    <List
      delItem={id => setList(prev => prev.filter(item => id !== item.id))}
      toggleChecked={id => setList(prev => {
        const
          index = prev.findIndex(item => id === item.id);
        console.log('index=', index);
        return prev.with(index, prev[index].toggleChecked());
      })}
      list={list}
    />
  </>;
}


function Form({ addItem }) {
  const
    [value, setValue] = useState('-start-');
  return <fieldset>
    <legend>Form</legend>
    <input value={value} onInput={event => setValue(event.target.value)} />
    <Button onClick={() => { addItem(value); setValue('') }}>➕Add</Button>
  </fieldset>
}

function List({ list, delItem, toggleChecked }) {
  return <fieldset>
    <legend>List</legend>
    <ol>
      {list.map(item =>
        <ToDoItem
          toggleChecked={toggleChecked}
          key={item.id}
          item={item}
        >
          <Button onClick={() => delItem(item.id)}>❌</Button>
        </ToDoItem>)}
    </ol>
  </fieldset>
}

function ToDoItem({ item, children, toggleChecked }) {
  const
    { id, checked, text } = item;
  return <li>
    <input
      type="checkbox"
      value={checked}
      onChange={() => toggleChecked(id)} />
    {checked && '✔'}
    {text}
    {children}
  </li>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}