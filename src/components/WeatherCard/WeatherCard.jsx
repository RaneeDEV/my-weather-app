import "./WeatherCard.css";

function WeatherCard() {
  return (
    <>
      <div className="card">
        <div className="card-info-wrapper">
          <div className="left-weather-info">
            <h1 className="region-title">Днепровское</h1>
            <span className="card-date">Чт, 3 июня, 20:36</span>
            <div className="card-degree-box">
              <h2 className="degree">+11</h2>
              <div className="degree-weather-current">
                {/* <img src="./" alt="weather image" /> */}
                <span className="degree-weather-desc">Пасмурно</span>
              </div>
            </div>
            <div className="card-weather-info-wrap">
              <div className="weather-info-box">
                <p className="weather-info-title"><span>По ощущению</span></p>
                <span className="current-weather-info">+9</span>
              </div>
              <div className="weather-info-box">
                <p className="weather-info-title"><span>Ветер</span></p>
                <span className="current-weather-info">9 м/с, С</span>
              </div>
              <div className="weather-info-box">
                <p className="weather-info-title"><span>Давление</span></p>
                <span className="current-weather-info">755 мм рт. ст.</span>
              </div>
              <div className="weather-info-box">
                <p className="weather-info-title"><span>Влажность</span></p>
                <span className="current-weather-info">94%</span>
              </div>
              <div className="weather-info-box">
                <p className="weather-info-title"><span>Геомагнитная активность</span></p>
                <span className="current-weather-info">1 балл</span>
              </div>
              <div className="weather-info-box">
                <p className="weather-info-title"><span>Температура воды</span></p>
                <span className="current-weather-info">+16,6</span>
              </div>
            </div>
          </div>
          <div className="right-weather-info"></div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
