import React, {ChangeEvent, FormEvent, useState} from 'react';
import {FormControl, Input, InputLabel, Button} from '@material-ui/core';
import {client} from "../services/api";

export function AddEventForm() {
    const [event, setEvent] = useState('')
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        client.post('events', {
            name: event
        })
        setEvent('')
    };
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEvent(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="event">Event name</InputLabel>
                <Input onChange={handleOnChange} value={event} id="event" />
                <Button type="submit">Add event</Button>
            </FormControl>
        </form>
    )
}