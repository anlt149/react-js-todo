import { useEffect, useState } from "react";
import taskApi from "./api/taskApi";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import TaskInput from "./components/TaskInput";
import Tasks from "./components/Tasks";

function App() {
  const [isShowInput, setIsShowInput] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getAllTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    getAllTasks();
  }, []);

  // Fetch tasks from api
  const fetchTasks = async () => {
    const res = await taskApi.fetch();
    return res ? res : null;
  };

  // Fetch tasks from api
  const getTaskById = async (id) => {
    const res = await taskApi.getTaskById(id);
    return res ? res : null;
  };

  // Delete task on click
  const deleteTask = async (id) => {
    await taskApi.delete(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await getTaskById(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    // Call api
    await taskApi.update(id, updTask);
  };

  // Add task
  const addTask = async (task) => {
    const res = taskApi.add(task);
    // Re-render list
    // TODO In case res is null setTasks still working normally?
    setTasks([...tasks, res]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setIsShowInput(!isShowInput)}
          displayInput={isShowInput}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {isShowInput && <TaskInput onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "Congratz! No tasks left, add some more."
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
