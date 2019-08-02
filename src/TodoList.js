import React from 'react'
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import Todo from './Todo';

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map(t => (
                        <React.Fragment key={t.id}>
                            <Todo
                                task={t.task}
                                id={t.id}
                                completed={t.completed}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />

                        </React.Fragment>
                    ))}
                </List>
            </Paper>

        )
    return null
}
