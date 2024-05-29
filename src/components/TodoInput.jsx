import { React, useState } from "react";

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;
    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => {
                    setTodoValue(e.target.value);
                }}
                placeholder="Add Todos here..."
            ></input>
            <button
                onClick={() => {
                    if (todoValue) handleAddTodos(todoValue);
                    setTodoValue("");
                }}
            >
                Add
            </button>
        </header>
    );
}
