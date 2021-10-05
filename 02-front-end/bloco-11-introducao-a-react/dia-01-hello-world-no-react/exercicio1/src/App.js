import logo from './logo.svg';
import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Estudar React', 'Beber água', 'Tomar banho', ]

function App() {
  return (
    <div className="App">
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    </div>
  );
}

export default App;
