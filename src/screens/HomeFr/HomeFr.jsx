import React, { useState, useEffect } from "react";
import "./style.css";

export const HomeFr = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    renderCalendar();
  }, [currentDate]); // Runs when `currentDate` changes

  const renderCalendar = () => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    let daysArray = [];

    // Previous month days
    for (let x = firstDay.getDay(); x > 0; x--) {
      daysArray.push({ day: prevLastDayDate - x + 1, type: "prev" });
    }

    // Current month days
    for (let i = 1; i <= lastDayDate; i++) {
      let type = "";
      if (
        i === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear()
      ) {
        type = "today";
      }
      daysArray.push({ day: i, type });
    }

    // Next month days
    for (let j = 1; j <= nextDays; j++) {
      daysArray.push({ day: j, type: "next" });
    }

    setDays(daysArray);
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="HOME-FR">
      <div className="div">
        <div className="pg">
          <img
            className="sidebar-pg"
            alt="Sidebar pg"
            src="https://c.animaapp.com/RvWIzz1c/img/sidebar-pg-2.svg"
          />

          <div className="recommendations">
            <div className="overlap-group">
              <div className="rectangle" />

              <div className="online-training-in-wrapper">
                <img
                  className="online-training-in"
                  alt="Online training in"
                  src="https://c.animaapp.com/RvWIzz1c/img/online-training-in-different-areas-4@2x.png"
                />
              </div>

              <div className="img-wrapper">
                <img
                  className="online-training-in"
                  alt="Online training in"
                  src="https://c.animaapp.com/RvWIzz1c/img/online-training-in-different-areas-4@2x.png"
                />
              </div>

              <div className="recommendations-2">
                <img
                  className="online-training-in"
                  alt="Online training in"
                  src="https://c.animaapp.com/RvWIzz1c/img/online-training-in-different-areas-4@2x.png"
                />
              </div>

              <div className="text-wrapper">LOAD MORE...</div>

              <div className="text-wrapper-2">FOR YOU</div>
            </div>
          </div>

          <div className="stock-market">
            <img
              className="businessman"
              alt="Businessman"
              src="https://c.animaapp.com/RvWIzz1c/img/businessman--calculator-and-browser@2x.png"
            />

            <div className="text-wrapper-3">STOCK MARKET</div>

            <div className="element">
              <div className="overlap-group-2">
                <div className="text-wrapper-4">check out todays.......</div>

                <img
                  className="img"
                  alt="Online training in"
                  src="https://c.animaapp.com/RvWIzz1c/img/online-training-in-different-areas-4@2x.png"
                />
              </div>
            </div>

            <div className="element-2">
              <img
                className="online-training-in"
                alt="Online training in"
                src="https://c.animaapp.com/RvWIzz1c/img/online-training-in-different-areas-4@2x.png"
              />

              <div className="text-wrapper-5">latest trends, crypto share</div>
            </div>
          </div>
        </div>

        <div className="pg-2">
          <div className="top-bar">
            <div className="search">
              <div className="overlap">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Search submitted!");
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      background: "transparent",
                      paddingLeft: "40px",
                      fontSize: "16px",
                      color: "inherit",
                    }}
                  />
                  <button type="submit" style={{ display: "none" }}></button>
                </form>
              </div>
            </div>

            <div className="streak">
              <img
                className="vector-2"
                alt="Vector"
                src="https://c.animaapp.com/RvWIzz1c/img/vector.svg"
              />

              <div className="text-wrapper-7">30</div>
            </div>

            <img
              className="notif-icon"
              alt="Notif icon"
              src="https://c.animaapp.com/RvWIzz1c/img/notif-icon@2x.png"
            />

            <img
              className="user-icon"
              alt="User icon"
              src="https://c.animaapp.com/RvWIzz1c/img/user-icon.svg"
            />
          </div>

          <div className="jump-back-in">
            <div className="overlap-2">
              <div className="overlap-3">
                <div className="rectangle-2" />

                <img
                  className="goods-and-promotions"
                  alt="Goods and promotions"
                  src="https://c.animaapp.com/RvWIzz1c/img/goods-and-promotions-flying-into-the-shopping-cart@2x.png"
                />

                <button
                  className="continue-button"
                  onClick={() => alert("Button clicked!")}
                >
                  <div className="overlap-group-4">
                    <div className="creat-account" />
                    <div className="text-wrapper-8">Continue</div>
                  </div>
                </button>

                <div className="progress-bar">
                  <div className="text-wrapper-9">25%</div>

                  <div className="rectangle-3" />
                </div>

                <div className="budgeting-taxation">Budgeting & taxation</div>
              </div>

              <div className="jump-back-in-2">
                Jump&nbsp;&nbsp;Back&nbsp;&nbsp;in
              </div>
            </div>
          </div>
          <div className="container">
            <div className="calendar">
              <div className="overlap-4">
                <div className="calendar-2">
                  <div className="header">
                    <div className="month">
                      {months[currentDate.getMonth()]}{" "}
                      {currentDate.getFullYear()}
                    </div>
                    <div className="btn">
                      <div className="btn today">
                        <i className="fas fa-calendar-day"></i>
                      </div>
                      <div className="btn prev" onClick={handlePrevMonth}>
                        <i className="fas fa-calender-day"></i>
                      </div>
                      <div className="btn today">
                        <i className="fas fa-calendar-day"></i>
                      </div>
                    </div>
                  </div>
                  <div class="weekdays">
                    <div class="day">Sun</div>
                    <div class="day">Mon</div>
                    <div class="day">Tue</div>
                    <div class="day">Wed</div>
                    <div class="day">Thu</div>
                    <div class="day">Fri</div>
                    <div class="day">Sat</div>
                  </div>
                  <div class="days">
                    {days.map((item, index) => (
                      <div key={index} className={`day ${item.type}`}>
                        {item.day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="today-btn"
                onClick={handleToday}
                style={{
                  display:
                    currentDate.getMonth() === new Date().getMonth() &&
                    currentDate.getFullYear() === new Date().getFullYear()
                      ? "none"
                      : "flex",
                }}
              >
                Today
              </button>
            </div>
          </div>
          <div className="welcome-back">
            <div className="overlap-5">
              <div className="we">Welcome Bubbles!</div>

              <img
                className="coin-flower"
                alt="Coin flower"
                src="https://c.animaapp.com/RvWIzz1c/img/coin-flower@2x.png"
              />
            </div>
          </div>

          <div className="daily-tip">
            <div className="overlap-6">
              <div className="box" />

              <div className="text-wrapper-10">DAILY TIP</div>

              <img
                className="clip"
                alt="Clip"
                src="https://c.animaapp.com/RvWIzz1c/img/clip.svg"
              />

              <img
                className="adding-money-to"
                alt="Adding money to"
                src="https://c.animaapp.com/RvWIzz1c/img/adding-money-to-savings@2x.png"
              />

              <div className="text-wrapper-11">Let’s goooooo!!!</div>
            </div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-7">
              <div className="rectangle-4" />

              <div className="rectangle-5" />

              <div className="sidebar-component">
                <img
                  className="fox"
                  alt="Fox"
                  src="https://c.animaapp.com/RvWIzz1c/img/fox@2x.png"
                />

                <div className="learn-icon">
                  <div className="overlap-group-5">
                    <div className="text-wrapper-12">Learn</div>

                    <img
                      className="learning-hub-icon"
                      alt="Learning hub icon"
                      src="https://c.animaapp.com/RvWIzz1c/img/learning-hub-icon.svg"
                    />
                  </div>
                </div>

                <div className="brain-icon">
                  <img
                    className="practice-brain-icon"
                    alt="Practice brain icon"
                    src="https://c.animaapp.com/RvWIzz1c/img/practice-brain-icon.svg"
                  />

                  <div className="text-wrapper-12">Practice</div>
                </div>

                <div className="home-box">
                  <div className="overlap-8">
                    <div className="text-wrapper-13">Home</div>

                    <img
                      className="home-icon"
                      alt="Home icon"
                      src="https://c.animaapp.com/RvWIzz1c/img/home-icon.png"
                    />
                  </div>
                </div>

                <div className="dashboard">
                  <div className="text-wrapper-14">Dashboard</div>

                  <img
                    className="currency-crush-bar"
                    alt="Currency crush bar"
                    src="https://c.animaapp.com/RvWIzz1c/img/currency-crush-bar-chart@2x.png"
                  />
                </div>

                <div className="settings-box">
                  <div className="settings-icon">
                    <img
                      className="vector-3"
                      alt="Vector"
                      src="https://c.animaapp.com/RvWIzz1c/img/vector-1.svg"
                    />
                  </div>

                  <div className="text-wrapper-15">Settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
