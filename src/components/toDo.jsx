import { useState } from "react";

const Todo = () => {
    const [toDoText, setToDoText] = useState("");
    const [allToDos, setAllToDos] = useState([]);

    const handleTextChange = (e) => {
        let val = e.target.value;
        setToDoText(val);
    };

    const addToDo = () => {
        let copy = [...allToDos];
        copy.push(toDoText);
        setAllToDos(copy);
    };

    return (
        <div className="todo-page">
            <h3>Shopping List</h3>

            <div className="capture">
                <input name="todo-text" onChange={handleTextChange} type="text" />
                <button className="btn btn-sm btn-primary" onClick={addToDo}>
                    Add
                </button>
            </div>

            <div className="List">
                <ul>
                    {allToDos.map((t,index) => (
                        <li key={index}>{t}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Todo;