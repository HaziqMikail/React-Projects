import React, {useState} from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["eat"]); // State to hold the list of tasks
    const [newTask, setNewTask] = useState(""); // State to hold the new task input

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function AddTask() {
        if (newTask.trim() === "") return; // Prevent adding empty tasks
        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);// Create a new list without the deleted task
        setTasks(updatedTasks);// Update state with the new list
    }

    function moveTaskUp(index) {
        if (index === 0) return; // Can't move up the first task
        const updatedTasks = [...tasks];
        [updatedTasks[index - 1], updatedTasks[index]] = 
        [updatedTasks[index], updatedTasks[index - 1]];
        setTasks(updatedTasks);
    }

    function moveTaskDown(index) {
        if (index === tasks.length - 1) return; // Can't move down the last task
        const updatedTasks = [...tasks];
        [updatedTasks[index + 1], updatedTasks[index]] = 
        [updatedTasks[index], updatedTasks[index + 1]];
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className="add-button" onClick={AddTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button> 
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>

        </div>
    )
}

export default ToDoList;
