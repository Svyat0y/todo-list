import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Todolist from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

const App = () => {

	const todoData = [
		{ label: 'Drink coffee', important: false, id: 1 },
		{ label: 'Have a lunch', important: false, id: 2 },
		{ label: 'Create react app', important: true, id: 3 }
	]

	return (
		<div className='app'>
			<AppHeader/>
			<div className='search-panel d-flex'>
				<SearchPanel/>
				<ItemStatusFilter/>
			</div>
			<Todolist todos={ todoData }/>
		</div>
	);
};

export default App;