import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

const Form = () => {

    const handleSubmit = () => {
        console.log("Submit");
    }

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Ask a Question!</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth />
                <TextField name="message" variant="outlined" label="Message" fullWidth />
                <TextField name="user" variant="outlined" label="User" fullWidth />
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Ask Away!</Button>
            </form>
        </Paper>
    );
}

export default Form;