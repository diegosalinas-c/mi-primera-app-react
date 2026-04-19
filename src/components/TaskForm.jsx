function TaskForm({ input, setInput, onAddTask }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddTask();
    }
  };

  return (
    <section className="task-form">
      <label htmlFor="taskInput" className="label">
        Escribe una tarea
      </label>

      <div className="input-group">
        <input
          id="taskInput"
          type="text"
          placeholder="Ejemplo: estudiar React"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={onAddTask}>Agregar</button>
      </div>
    </section>
  );
}

export default TaskForm;
