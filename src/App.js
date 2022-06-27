import React, { useState, useEffect } from "react";
import TaskCreate from "./components/TaskCreateComponent";
import TaskTable from "./components/TaskTable";
import Visibility from "./components/VisibilityControl";
import "./App.css";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createTask = (taskName) => {
    // se crea un nuevo arreglo y no modificar el anterior
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggelTask = (task) => {
    setTaskItems(
      taskItems.map((item) =>
        item.name === task.name ? { ...item, done: !item.done } : item
      )
    );
  };

  //apenas la aplicacion cargue si el arreglo esta vacio
  useEffect(() => {
    let data = localStorage.getItem("tasks");

    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreate createNewTask={createTask} />
        <TaskTable tasks={taskItems} toggelTask={toggelTask} />
        <Visibility
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggelTask={toggelTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
