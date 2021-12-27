// components
import Todo from './Todo'

export default function Todos(props) {
  console.log(props.todoList);

  return (
    <div>
      <h1>Todo list</h1>
      {
        props.todoList.map((todo, i) => {
          return <Todo key={i} todo={todo}/>
        })
      }
    </div>
  )
}