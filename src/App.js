import './App.css';
import Todos from './Todos';

function App() {
  const todoList = [
    {
      title: 'react',
      description: 'do my react task',
      isCompleted: false
    },
    {
      title: 'fireworks',
      description: 'buy some fireworks',
      isCompleted: false
    },
    {
      title: 'walk',
      description: 'burn some extra calories',
      isCompleted: false
    },
    {
      title: 'presents',
      description: 'give presents',
      isCompleted: true
    },
    {
      title: 'clean',
      description: 'clean apartment',
      isCompleted: true
    },
    {
      title: 'keyboard',
      description: 'build keyboard',
      isCompleted: true
    },
    {
      title: 'modify',
      description: 'modify mouse switches',
      isCompleted: false
    },
    {
      title: 'dog treats',
      description: 'buy some delicious treats',
      isCompleted: false
    },
    {
      title: 'buy snus',
      description: 'get one or two stock of snus',
      isCompleted: false
    },
    {
      title: 'job',
      description: 'search for some job',
      isCompleted: false
    }
  ]

  return (
    <div className="App">
      <Todos todoList={todoList}/>
    </div>
  );
}

export default App;
