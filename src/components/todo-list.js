import React from 'react';

import TodoListItem from './todo-list-item';

const Todolist = () => {
	return (
		<ul>
			<li><TodoListItem /></li>
			<li><TodoListItem /></li>
		</ul>
	);
};

export default Todolist;