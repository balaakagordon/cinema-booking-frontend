import React from 'react';
import {Grid, Avatar} from '@material-ui/core';
import cinemaStyles from '../styles/cinemaStyles';


const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];


const getSeatColor = (seatType, selected) => {
    //
}

const getSeatType = (row, column) => {
    //
}

const getSeat = (classes, row, column) => {
    let seat = <Avatar className={classes.orangeAvatar}>{row}{column}</Avatar>
    return seat
}

const getRows = (row, classes) => {
    let rowsOutput = columns.map((column) => (
        <div>
            {getSeat(classes, row, column)}
        </div>
    ))
    console.log(rowsOutput);
    return rowsOutput;

}

const getSeats = (classes) => {
    let seats = rows.map((row) => (
        <Grid container justify="center" alignItems="center">
            {getRows(row, classes)}
        </Grid>
    ));
return seats;
}


const Seats = props => {
    const classes = cinemaStyles();
    return(
        <div>
            {getSeats(classes)}
        </div>
    );
}

export default Seats;