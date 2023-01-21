import React, { useEffect, useState } from "react";
import Clock from "./Clock";

const EventsPage = () => {
  // const [events, setEvents] = useState([]);

  // const getEvents = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  //   setEvents(await res.json());
  //   console.log(res);
  // };

  // useEffect(() => {
  //   getEvents();
  // }, []);

  return (
    <div className="container-main">
      <div className="container-main-upper">
        <div className="container-upper-content1">
          <h1>YUVACRACY</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            voluptatibus eos! Laborum similique modi, adipisci cupiditate esse
            saepe nostrum expedita earum pariatur quis iste autem harum culpa
            accusamus! Qui, aspernatur.
          </p>
        </div>
        <div className="container-upper-content2">
          <h3>Date & Time</h3>
          <p>Thursay, Jan 12, 2023 at 20: 30 PM</p>
          <button id="colored-button">Book Now (Free)</button>
          <button id="outline-button">Promoter Program</button>
        </div>
      </div>

      <div className="container-main-lower">
        <div className="countdown-container">
          <h1 id="event-tag">EVENT STARTING IN</h1>
          <Clock duration={2 * 24 * 60 * 60 * 1000} />
        </div>
        <div className="container-lower-content">
          <h1>Upcoming Events</h1>
          <div className="item">
            <div className="img-div">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="info-div">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                excepturi, qui perferendis laudantium architecto ea explicabo
                nam ratione dolorem, aperiam possimus minus voluptates
                exercitationem nihil aliquid temporibus. Dolor ex, consectetur
                itaque cumque soluta est eos libero nulla totam ullam natus.
              </p>
              <span>12th January 2023 at 20:30 pm</span>
            </div>
          </div>
          <hr />
          <div className="item">
            <div className="img-div">
              <img
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHVldCUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="info-div">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                excepturi, qui perferendis laudantium architecto ea explicabo
                nam ratione dolorem, aperiam possimus minus voluptates
                exercitationem nihil aliquid temporibus. Dolor ex, consectetur
                itaque cumque soluta est eos libero nulla totam ullam natus.
              </p>
              <span>12th January 2023 at 20:30 pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
