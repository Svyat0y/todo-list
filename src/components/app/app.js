import React, {Component} from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Todolist from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData: [
			{ label: 'Drink coffee', important: false, id: 1 },
			{ label: 'Have a lunch', important: false, id: 2 },
			{ label: 'Create react app', important: false, id: 3 }
		]
	};

	addItem = (text) => {
		this.setState(({todoData}) => {
			const newItem = {label: text, important: false, id: this.maxId++}
			const newArray = [...todoData, newItem]

			return {
				todoData: newArray
			}
		})
	}

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
		window.state = this.state;
		return (
			<div className='app'>
				<AppHeader toDo={3} done={0}/>
				<div className='search-panel d-flex'>
					<SearchPanel/>
					<ItemStatusFilter/>
				</div>
				<Todolist todos={ this.state.todoData } onDeleted={this.deleteItem}/>
				<ItemAddForm addItem={this.addItem}/>
			</div>
		);
	};
};
