import "./App.css";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

function App() {
  return (
    <>
      <div className="m-4 text-2xl">Redux Toolkit</div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
