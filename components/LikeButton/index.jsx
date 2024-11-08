import classes from './LikeButton.module.css';
import { useState } from 'react';

export function DemoLikeButton() {
    const
        [todo, setTodo] = useState([newItem('1'), newItem('2')]);
    return <fieldset>
        <legend>ToDo List</legend>
        <TodoForm addTask={task => setTodo([...todo, newItem(task)])} />
        <hr />
        <List arr={todo} delItem={id => setTodo(prev => prev.filter(item => item.id != id))} />
    </fieldset>
}

function TodoForm({ addTask }) {
    const [inputTask, setInputTask] = useState('');
    return <fieldset>
        <input placeholder='Впишите вашу задачу: '
            onInput={event => setInputTask(event.target.value)}
            value={inputTask} />
        <button onInput={() => { addTask(inputTask); setInputTask('') }}>Save Task</button>
    </fieldset>
}




function List({ arr, delItem }) {
    return <ol>
        {arr.map(item => <li key={item.id}><button className={classes.buttondel} onClick={() => delItem(item.id)}>X</button>{item.text}</li>)}
    </ol>
}


function newItem(text) {
    return {
        id: Math.random(),
        text,
        checked: false
    }
}






