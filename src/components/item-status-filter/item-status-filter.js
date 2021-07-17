import React, { useState } from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({ filter, onChangeFilter }) => {

	const [ stateButtons ] = useState([
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'done', label: 'Done' }
	])

	const buttons = stateButtons.map(({ name, label }) => {
		const isActive = filter === name;
		const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary'
		return (
			<button type='button'
					className={ `btn ${ btnClass }` } key={ name }
					onClick={ () => onChangeFilter(name) }>{ label }
			</button>
		)
	})

	return (
		<div className='btn-group'>
			{ buttons }
		</div>
	);
};

export default ItemStatusFilter;