import React from "react";
import "./Calendardash.scss";

import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import events from "./Events";
import FullCalendar from "@fullcalendar/react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Button } from "react-bootstrap";

export default function Calendardash() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <Button>Add</Button>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            themeSystem="Simplex"
            plugins={[dayGridPlugin]}
            events={events}
          />
          {/* <FullCalendar
            defaultView="dayGridMonth"
            // themeSystem="Simplex"
            // header={{
            //   left: "prev,next",
            //   center: "title",
            //   right: "dayGridMonth,timeGridWeek,timeGridDay",
            // }}
            plugins={[dayGridPlugin]}
            events={events}
            displayEventEnd="true"
            eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          /> */}
        </div>
      </div>
    </div>
  );
}










