import React from "react";
import loader from "https://cdn.dribbble.com/users/6846220/screenshots/20068634/media/2223caa2992f6f54edd38f60ce5c0087.gif";

const Loading = () => (
  <React.Fragment>
    <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
    <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
      Detecting your location
    </h3>
    <h3 style={{ color: "white", marginTop: "10px" }}>
      Your current location will be displayed on the App <br /> & used for
      calculating Real-time weather.
    </h3>
  </React.Fragment>
);

export default Loading;
