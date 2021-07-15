import React, {Component} from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Todolist from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {

	state = {
		todoData: [
			{ label: 'Drink coffee', important: false, id: 1 },
			{ label: 'Have a lunch', important: false, id: 2 },
			{ label: 'Create react app', important: true, id: 3 }
		]
	};

	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);

			const newArray = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			]

			return {
				todoData: newArray
			};
		});
	};

	render() {
		return (
			<div className='app'>
				<AppHeader toDo={3} done={0}/>
				<div className='search-panel d-flex'>
					<SearchPanel/>
					<ItemStatusFilter/>
				</div>
				<Todolist todos={ this.state.todoData } onDeleted={this.deleteItem}/>
			</div>
		);
	};
};
