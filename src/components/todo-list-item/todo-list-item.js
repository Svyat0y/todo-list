import React, { Component } from 'react';
import './todo-list-item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export default class TodoListItem extends Component {

	state = {
		done: false,
		important: false
	};

	onLabelClick = () => {
		this.setState(({done}) => {
			return { done: !done }
		})
	};

	onImportantClick = () => {
		this.setState(({important}) => {
			return { important: !important }
		})
	};

	render() {
		const { label, onDeleted } = this.props;
		const { done, important } = this.state;

		let classNames = 'todo-list-item d-flex';

		if (done) classNames += ' done';

		if (important) classNames += ' important';

		return (
			<span className={ classNames }>
				<span className='todo-list-item-label'
					  onClick={ this.onLabelClick }>
					{ label }
				</span>

				<span className='btn-group btn-wr d-flex'>
					<button type='button'
							className='btn btn-outline-success btn-sm'
							onClick={ this.onImportantClick }>
						<FontAwesomeIcon icon={ faExclamation }/>
					</button>
					<button type='button'
							className='btn btn-outline-danger btn-sm'
							onClick={onDeleted}>
						<FontAwesomeIcon icon={ faTrashAlt }/>
					</button>
				</span>
			</span>
		);
	};
};