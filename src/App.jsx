import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="app">
      <section className="container">
        <Header />
        <TaskForm
          input={input}
          setInput={setInput}
          onAddTask={handleAddTask}
        />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </section>
    </main>
  );
}

export default App;
