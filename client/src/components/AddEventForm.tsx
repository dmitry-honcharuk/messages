import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { client } from '../services/api';

export function AddEventForm() {
  const [event, setEvent] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    client.post('events', {
      name: event,
    });
    setEvent('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEvent(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor='event'>Event name</InputLabel>
        <Input onChange={handleChange} value={event} id='event' />
        <Button type='submit'>Add event</Button>
      </FormControl>
    </form>
  );
}
