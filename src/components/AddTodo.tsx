import React, {useRef} from "react";

interface TodoContent {
    onAddTodo: (text:string) => void;
}

const AddTodo: React.FC<TodoContent> = (props) => {


    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = () => {
        console.log('submit handler clicked!!!');
        let value = textInputRef.current!.value;
        props.onAddTodo(value)
    }

 return <div>

            <label>Enter TODO: </label>
            <input type="text" id="todo-text" ref={textInputRef}></input>
            <button onClick={todoSubmitHandler} type="submit">Go!</button>
        </div>;
}

export default AddTodo;