// 1
const Todo = ({ todo, handleToggleTodo, handleDeleteTodo }) => {
    return (
        <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
                {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
        </li>
    )
}
// // 2
// function Todo() {
//     return(
//     <li
//             key={todo.id}
//             style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//           >
//             {todo.text}
//             <button onClick={() => handleToggleTodo(todo.id)}>
//               {todo.completed ? "취소" : "완료"}
//             </button>
//             <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
//           </li>
//     )
// }

export default Todo;