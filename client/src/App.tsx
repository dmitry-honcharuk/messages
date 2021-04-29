import React from 'react';
import { EventsTable } from './components/EventsTable';
import {AddEventForm} from "./components/AddEventForm";

function App() {
  return (
    <div>
      <EventsTable />
        <AddEventForm />
    </div>
  );
}

export default App;
