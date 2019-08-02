import React from 'react'
import UseToggleState from './HOOKS/UseToggelState';
import EditTodoForm from './EditTodoForm';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { ListItemSecondaryAction } from '@material-ui/core';

export default function Todo({ task, completed, id, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = UseToggleState(false);
    return (
        <ListItem key={id} style={{ height: '64px' }}>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} />
                :
                <React.Fragment>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText
                        style={{ textDecoration: completed ? 'line-through' : 'none' }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle} >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>

                </React.Fragment>
            }
            <Divider />
        </ListItem>
    )
}
