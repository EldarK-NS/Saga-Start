import { useSelector, useDispatch } from "react-redux";

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(store);
  return (
    <div className='App'>
      <button onClick={() => dispatch({ type: "LOAD_DATA" })}>onClick</button>
    </div>
  );
}

export default App;
