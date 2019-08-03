import React from 'react';
import UseTosoState from './HOOKS/useTosoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Grid } from '@material-ui/core';


export default function TodoApp() {
    const initialTodos = { id: 1, task: 'initial state', completed: false }

    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = UseTosoState(initialTodos)


    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "@fafafas"
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>2 Dos With Hooks (material-ui & localStorage)</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center'
                style={{ marginTop: '1rem' }}
            >
                <Grid item xs={11} md={8} lg={3}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>

        </Paper>
    )
}
