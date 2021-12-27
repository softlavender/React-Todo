export default function Todo({todo}) {
  console.log(todo);

  return (
    <>
      {
      todo.isCompleted ? 
        <h1 style={{color: 'green'}}>{todo.title}</h1> :
        <div>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      }
    </>
  )
}