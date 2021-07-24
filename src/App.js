import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskInput from "./components/TaskInput";
import { useState } from "react";
function App() {
  const [isShowInput, setIsShowInput] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "ABC",
      day: "2021/07/24",
      reminder: true,
    },
    {
      id: "2",
      text: "DEF",
      day: "2021/07/24",
      reminder: true,
    },
    {
      id: "3",
      text: "GHK",
      day: "2021/07/24",
      reminder: true,
    },
  ]);
  // Delete task on click
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    console.log(task);
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setIsShowInput(!isShowInput)}
        displayInput={isShowInput}
      />
      {isShowInput && <TaskInput onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Congratz! No tasks left, add some more."
      )}
    </div>
  );
}

export default App;
