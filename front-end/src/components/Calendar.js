import { useState } from "react";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import "../styles/Calendar.css";

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, startEndDate] = useState(new Date());

    return (
        <div>
            <DateRangePickerComponent id="daterangepicker" placeholder='Select Rental Dates' 
            // startDate={startDate}
            // endData={endDate}
            minDays={2}
            maxDays={5}
            />
        </div>
    )
}

export default Calendar
