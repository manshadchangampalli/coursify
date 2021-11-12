import Home from "./Pages/Home/Home";
import './App.scss'
import './Assets/Style Sheet/Responsive.scss'
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducers from "./Redux/Reducers";

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Home/>
    </div>
    </Provider>
  );
}

export default App;
