export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <div>
        <button>check task</button>
        <span>{todo.text}</span>
      </div>
      <button onClick={() => onDelete(todo.id)}>delete</button>
    </div>
  );
};
