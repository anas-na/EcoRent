import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DayPicker = ({ startDate, endDate, setStartDate, setEndDate }) => {

    return (
      <>
      <label for="startDatePicker">Start Date</label>
      <DatePicker id="startDatePicker" selected={startDate} onChange={(date) => setStartDate(date)} />
      <label for="endDatePicker">End Date</label>
      <DatePicker id="endDatePicker" selected={endDate} onChange={(date) => setEndDate(date)} />
      </>
    );
  };

export default DayPicker;
