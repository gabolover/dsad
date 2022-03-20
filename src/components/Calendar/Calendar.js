import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { forwardRef } from "react";
import moment from "moment";
import "./calendar.css";
/* const fecha = moment(date);
const actual = fecha.format("MMMM d, yyyy h:mm aa");
console.log("fecha actual" + actual); */
const Calendar = ({ setDueDate, setDueDateVisible }) => {
  const [date, setDate] = useState(new Date());
  const dateSelected = moment(date);
  const dateFormated = dateSelected.format("MMMM DD, YYYY");
  console.log(moment(dateFormated).format());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  useEffect(() => {
    setDueDate(dateFormated);
  }, [date]);

  return (
    <div className="calendar">
      <DatePicker
        selected={date}
        onChange={(date) => {
          setDate(date);
          /*           setDueDate(dateFormated);
           */
        }}
        onClickOutside={() => setDueDateVisible(false)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        inline
      />
    </div>
  );
};

export default Calendar;
