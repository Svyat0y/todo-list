import React from 'react';
import './todo-list-item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const TodoListItem = ({ label, onDeleted, onToggleDone, onToggleImportant, important, done }) => {

	let classNames = 'todo-list-item d-flex';

	if (done) classNames += ' done';

	if (important) classNames += ' important';

	return (
		<span className={ classNames }>
				<span className='todo-list-item-label'
					  onClick={ onToggleDone }>
					{ label }
				</span>

				<span className='btn-group btn-wr d-flex'>
					<button type='button'
							className='btn btn-outline-success btn-sm'
							onClick={ onToggleImportant }>
						<FontAwesomeIcon icon={ faExclamation }/>
					</button>
					<button type='button'
							className='btn btn-outline-danger btn-sm'
							onClick={ onDeleted }>
						<FontAwesomeIcon icon={ faTrashAlt }/>
					</button>
				</span>
			</span>
	);
};

export default TodoListItem;