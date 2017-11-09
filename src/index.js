
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import registerServiceWorker from './registerServiceWorker';

// function todos(state = [], action) {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return state.concat([action.text])
// 		default:
// 			return state
// 	}
// }

// const store = createStore(todos, ['use Redux']);

ReactDOM.render(
	<App />, document.getElementById('root'));
registerServiceWorker();
