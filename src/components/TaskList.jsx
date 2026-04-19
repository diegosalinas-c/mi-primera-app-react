import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <section className="task-list-section">
      <h2>Mis tareas</h2>

      {tasks.length === 0 ? (
        <p className="empty-message">No hay tareas agregadas por ahora.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
