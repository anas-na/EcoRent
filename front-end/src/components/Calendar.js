import { useState } from "react";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import "../styles/Calendar.css";

const Calendar = ({ startDate, endDate, setStartDate, setEndDate }) => {


// const dateValue = new Date("10/07/2021 10:30 AM")
// const start = new Date(now.getFullYear(), 0, 0);
// const diff = endDate.getDate - startDate.getDate();
// const oneDay = 1000 * 60 * 60 * 24;
// const day = Math.floor(diff / oneDay);
// console.log('Day of year: ' + day);

// var now = new Date();
// var start = new Date(now.getFullYear(), 0, 0);
// var diff = now - start;
// var oneDay = 1000 * 60 * 60 * 24;
// var day = Math.floor(diff / oneDay);
// console.log('Day of year: ' + day);

// setStartDate(Date = new Date(new Date().getFullYear(), new Date().getMonth(), 14))
// startEndDate(Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15))

// console.log(startDate)
// console.log(endDate)

    return (
        <div>
            <DateRangePickerComponent id="daterangepicker" placeholder='Select Rental Dates' 
            startDate={startDate}
            endDate={endDate}
            onChange={(e) => {setStartDate(e.target.currentDate)}}
            onChange={(e) => {setEndDate(e.target.endValue)}}
            minDays={2}
            maxDays={5}
            />
        </div>
    )
}

export default Calendar