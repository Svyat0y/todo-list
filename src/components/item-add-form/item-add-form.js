import React, { useState } from 'react';
import './item-add-form.css';

const ItemAddForm = ({ addItem }) => {

	const [ label, setLabel ] = useState('')

	const onLabelChange = (e) => {
		setLabel(e.target.value)
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if(!label) return false
		addItem(label)
		setLabel('')
	};

	return (
		<form className='item-add-form d-flex'
			  onSubmit={ onSubmit }>
			<input type='text'
				   className='form-control'
				   onChange={ onLabelChange }
				   placeholder='write a message'
				   value={ label }/>
			<button className='btn btn-outline-secondary'>Add Item</button>
		</form>
	);
};

export default ItemAddForm;