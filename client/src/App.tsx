import React from 'react';
import { AddEventForm } from './components/AddEventForm';
import { EventsTable } from './components/EventsTable';

function App() {
  return (
    <div>
      <EventsTable />
      <AddEventForm />
    </div>
  );
}

export default App;
