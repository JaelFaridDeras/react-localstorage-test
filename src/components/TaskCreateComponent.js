import React, { useState } from "react";

const TaskCreateComponent = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        setNewTaskName("");
    };


    return (
        <form onSubmit={handleSubmit} className="my-2 row">
            <div className="col-9">
                <input
                    type="text"
                    placeholder="enter a new task"
                    value={newTaskName}
                    onChange={(event) => setNewTaskName(event.target.value)}
                    className="form-control"
                />
            </div>
            <div className="col-3">
                <button className=" btn btn-primary btn-sm">Save task</button>
            </div>
        </form>
    );
};

export default TaskCreateComponent;
