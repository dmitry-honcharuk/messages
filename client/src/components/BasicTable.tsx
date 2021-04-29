import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import format from 'date-fns/format';
import React, { useEffect, useState } from 'react';
import { client } from '../services/api';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function BasicTable() {
  const classes = useStyles();
  const [events, setEvents] = useState<
    Array<{ name: string; createdAt: string }>
  >([]);

  useEffect(() => {
    client.get('/events').then(({ data }) => setEvents(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Event name</TableCell>
            <TableCell>Creation date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map(({ name, createdAt }) => {
            console.log('createdAt', createdAt);
            return (
              <TableRow key={name}>
                <TableCell component='th' scope='row'>
                  {name}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {format(new Date(createdAt), 'PP')}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
