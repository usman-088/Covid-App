import store from "./redux/index";
import {Provider} from 'react-redux'
import Covidapp from "./components/Covid";
import BarChar from "./components/Barchart";

function App() {
  return (
    <Provider store={store}>
      <Covidapp/>
      {/* <BarChar/> */}
    </Provider>
  );
}

export default App;
