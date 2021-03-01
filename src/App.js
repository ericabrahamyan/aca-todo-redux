import Todos from "./components/Todos";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <Todos />
      </div>
    </ReduxProvider>
  );
}

export default App;
