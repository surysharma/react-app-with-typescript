import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import {Todo} from "./todo.model";

const App: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) =>{
        console.log(text);
        setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);

    }

    const todoDeleteHandler = (item: Todo) => {
        setTodos(prevTodos => [...prevTodos.filter(todo => todo.id !== item.id)]);
    }

    return <div className="App">
            <AddTodo onAddTodo={todoAddHandler} ></AddTodo>
            <TodoList items = {todos} onDelete={todoDeleteHandler}/>
        </div>;
}

export default App;
