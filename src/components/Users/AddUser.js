import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

function AddUser(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = function (event) {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (
            enteredName.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)",
            });
            return; //when we return the code below wont be executed
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (greater than 0)",
            });
            return;
        }

        props.onAddUser(enteredName, enteredUserAge);
        console.log(nameInputRef.current.value)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = function () {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label for="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label for="age">Age (Year)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;
