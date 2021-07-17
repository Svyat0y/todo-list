import React, { useState } from 'react';
import './search-panel.css';

const SearchPanel = ({ onChangeTerm }) => {

	const [ term, setTerm ] = useState('')

	const onSearchChange = (e) => {
		const term = e.target.value
		setTerm(term)
		onChangeTerm(term)
	};

	return (
		<input className='search-input'
			   placeholder='type to search'
			   onChange={ onSearchChange }
			   value={ term }/>
	);
};

export default SearchPanel;

