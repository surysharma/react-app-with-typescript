import React from "react";
import {Todo} from "../todo.model";

interface ItemsProp{
    items:{id: string; text: string}[];
    onDelete: (item: Todo) => void
}

const TodoList: React.FC<ItemsProp> = (props) => {


    return <ul>
        {props.items.map(todo => (
            <li key={todo.id}>
                <span>
                    {todo.text}
                    <button onClick={props.onDelete.bind(null, todo)}>Delete</button>
                </span>
            </li>
        ))}
    </ul>;
}

export default TodoList;