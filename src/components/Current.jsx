import React from "react";

function Current({ current, location }) {
  return (
    <div className="container">
      <h4 className="text-center text-white mt-4">
        Current Weather of {location.name},{location.region},{location.country}
      </h4>
      <div className="row mt-3">
        {/* WEather Icon */}
        <div className="col-lg-4 col-sm-6  mb-2">
          <div
            className="card d-flex justify-content-center"
            style={{ cursor: "pointer" }}
          >
            <div className="row g-1">
              <div className="col-sm-6 d-flex justify-content-center align-items-center">
                <img
                  src={current.condition.icon}
                  className="img-fluid h-50 w-7 ms-4 float-start"
                  alt="..."
                />
              </div>
              <div className="col">
                <div className="card-body">
                  <h4 className="card-title text-white text-center">
                    {current.condition.text}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
              {/*Temperature in C  */}
        <div className="col-lg-4 col-sm-6 mb-2">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <div className="card-title text-white text-center">
                <h4>Temperature in Celsius  {current.temp_c}</h4>
              </div>
            </div>
          </div>
        </div>
              {/* Temperature in F */}
        <div className="col-lg-4 col-sm-6 mb-2">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <div className="card-title text-white text-center ">
                <h4>Temperature in Fahrenheit {current.temp_f}</h4>
              </div>
            </div>
          </div>
        </div>
            {/* Humidity */}
        <div className="col-lg-4 col-sm-6 mb-2">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <div className="card-title text-white text-center">
                <h4>Humidity : {current.humidity}</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Wind Speed */}
        <div className="col-lg-4 col-sm-6 mb-2">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <div className="card-title text-white text-center">
                <h4>Current Wind : {current.wind_kph}kph</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Feels Like */}
        <div className="col-lg-4 col-sm-6 mb-2">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <div className="card-title text-white text-center">
                <h4>Feels Like : {current.feelslike_c}°C</h4>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Current;
