import React from 'react';
import './todo-list-item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoListItem = ({ label, important }) => {

	const style = {
		color: important ? 'steelblue' : '',
		fontWeight: important ? 'bold' : 'normal'
	};

	return (
		<span className='todo-list-item d-flex'>
			<span className='todo-list-item-label'
				  style={ style }>
				{ label }
			</span>

			<span className='btn-group btn-wr d-flex'>
				<button type='button' className='btn btn-outline-success btn-sm'>
					<FontAwesomeIcon icon={ faExclamation }/>
				</button>
				<button type='button' className='btn btn-outline-danger btn-sm'>
					<FontAwesomeIcon icon={ faTrashAlt }/>
				</button>
			</span>
		</span>
	);
};

export default TodoListItem;