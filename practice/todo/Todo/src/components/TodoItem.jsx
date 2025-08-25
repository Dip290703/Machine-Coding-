import React from 'react'

const TodoItem = ({todo, onDelete,onEdit}) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editTask, setEditTask] = React.useState([]);

    const handleSave = () => {
      if(editTask.trim() === ""){
        alert("Task cannot be empty");
        return;
      }else{
        onEdit(todo.id , editTask)
      }
        setIsEditing(false);
    };
  return (
     <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {todo.task}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  )
}

export default TodoItem