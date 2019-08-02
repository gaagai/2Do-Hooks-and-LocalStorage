import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import uuid from 'uuid/v4';

export default function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
    // const initialTodos = [
    //     { id: 1, task: 'Clean House', completed: false },
    //     { id: 2, task: 'Wash Car', completed: true },
    //     { id: 3, task: 'Eat Meat', completed: false }
    // ]

    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos)
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(updatedTodos)
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        )
        setTodos(updatedTodos)
    }
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
