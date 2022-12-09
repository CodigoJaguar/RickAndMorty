import { createStore } from 'redux';
import rootReducer from './reducer';

const storeRicknMorty = createStore(rootReducer);

export default storeRicknMorty;

// Se hace npm install redux   y npm install react-redux
