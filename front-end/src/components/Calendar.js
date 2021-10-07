import { useState } from "react";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import "../styles/Calendar.css";

const Calendar = ({ startDate, endDate, setStartDate, setEndDate }) => {

const captureDates = (e) => {
    setStartDate(e.target.startValue)
    setEndDate(e.target.endValue)
}

    return (
        <div>
            <DateRangePickerComponent id="daterangepicker" placeholder='Select Rental Dates' 
            startDate={startDate}
            endDate={endDate}
            onChange={captureDates}
            minDays={2}
            maxDays={30}
            />
        </div>
    )
}

export default Calendar