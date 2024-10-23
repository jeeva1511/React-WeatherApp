import React from "react";


const Forecast = ({ forecast, location }) => {
  return (
    <div className="container mt-3">
      <h4 className="text-white text-center mb-1">
        Forecast Weather of {location.name}, {location.region}, {location.country}
      </h4>
      {forecast.forecastday.map((data, index) => {
        return (
          <div
            className="accordion accordion-flush mt-2 forecastAccordion"
            id="accordionFlushExample"
            key={index}
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#accordion-body-${index}`}
                  aria-expanded="false"
                  aria-controls={`accordion-body-${index}`}
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="d-flex flex-row mb-3 align-items-center justify-content-center ">
                        <div className="p-2 ms-auto">
                          <h6>Day: {data.date}</h6>
                        </div>
                        <div className="p-2 ms-5">
                          <img src={data.day.condition.icon} alt="Weather Icon" />
                          <h6>{data.day.condition.text}</h6>
                        </div>
                        <div className="p-2 ms-5">
                          <h6>Max Temp: {data.day.maxtemp_c}°C</h6>
                        </div>
                        <div className="p-2 ms-5">
                          <h6>Min Wind: {data.day.maxwind_kph}kph</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`accordion-body-${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${index}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {data.hour.map((hourData, hourIndex) => {
                    return (
                      <div key={hourIndex}>
                        <div className="row">
                          <div className="col-xl-12 text-center gx-1">
                            <h6>
                              {hourData.time} /
                              <img src={hourData.condition.icon} alt="Hour Weather Icon" /> /
                               {hourData.condition.text}
                            </h6>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div
                            className="progress mt-2"
                            role="progressbar"
                            aria-label="Animated striped example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              style={{ width: `${hourData.temp_c}%` }}
                            >
                              {hourData.temp_c}°C
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
