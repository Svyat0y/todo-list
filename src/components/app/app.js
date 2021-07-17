import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Todolist from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData: [],
		term: '',
		filter: 'all'
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	addItem = (text) => {
		this.setState(({ todoData }) => {
			const newItem = this.createTodoItem(text)
			const newArray = [ ...todoData, newItem ]

			return {
				todoData: newArray
			}
		})
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
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

	toggleProperty = (arr, id, propName) => {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx]
		const newItem = { ...oldItem, [propName]: !oldItem[propName] }

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		]
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		});
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		});
	};

	search(items, term) {
		if (!term) return items;

		return items.filter((item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
	};

	onChangeTerm = (term) => {
		this.setState({ term })
	}

	onChangeFilter = (filter) => {
		this.setState({ filter })
	}

	filter(items, filter) {

		switch (filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items
		}
	}

	render() {
		window.state = this.state;

		const { todoData, term, filter } = this.state;

		const visibleItems = this.filter(this.search(todoData, term), filter)

		const todoDoneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - todoDoneCount;

		return (
			<div className='app'>
				<AppHeader toDo={ todoCount } done={ todoDoneCount }/>
				<div className='search-panel d-flex'>
					<SearchPanel onChangeTerm={ this.onChangeTerm }/>
					<ItemStatusFilter filter={ filter }
									  onChangeFilter={ this.onChangeFilter }/>
				</div>
				<Todolist todos={ visibleItems } onDeleted={ this.deleteItem }
						  onToggleImportant={ this.onToggleImportant }
						  onToggleDone={ this.onToggleDone }/>
				<ItemAddForm addItem={ this.addItem }/>
			</div>
		);
	};
};
