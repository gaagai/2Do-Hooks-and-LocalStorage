import React from 'react'
import UseInputState from './HOOKS/UseInputState';
import { TextField } from '@material-ui/core';

export default function EditTodo({ editTodo, id, task, toggle }) {

    const [value, handleChange, reset] = UseInputState(task);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggle();
        }}
            style={{ marginLeft: '1rem', width: '100%' }}
        >
            <TextField autoFocus value={value} onChange={handleChange} margin='normal' fullWidth />
        </form>
    )
}
