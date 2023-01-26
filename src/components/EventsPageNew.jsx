import React from "react";

const EventsPageNew = () => {
  return (
    <div className="event-container">
      <div className="event-container-content-1">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/214/132/non_2x/teamwork-creative-advertising-free-vector.jpg"
          alt="img"
        />
      </div>
      <div className="event-container-content-2">
        <h1>New Events are Coming Soon</h1>
        <h3>Stay Tuned...</h3>
        {/* <p>To get Latest Updates about events please subscribe here</p>
        <form>
          <div className="form-container">
            <input type="text" placeholder="Please enter your email address" />
            <button type="submit">Subcribe here</button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default EventsPageNew;
