import { Provider } from 'react-redux';
import './App.css';
import Counter from './containers/Counter';
import Timer from './containers/timer';
import TimerFun from './containers/timer2';
import configureStore from './redux/store';

function App() {

  let store = configureStore();
  
  return ( 
    <>
      <Provider store={store} >
        <Counter />
      </Provider>
    </>
  );
}

export default App; 