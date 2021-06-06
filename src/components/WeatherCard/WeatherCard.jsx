import styles from "./WeatherCard.module.css";

function WeatherCard({city}) {
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card-info-wrapper"]}>
          <div className={styles["left-weather-info"]}>
            <h1 className={styles["region-title"]}>{city.name}</h1>
            <span className={styles["card-date"]}>Чт, 3 июня, 20:36</span>
            <div className={styles["card-degree-box"]}>
              <h2 className={styles["degree"]}>+11</h2>
              <div className={styles["degree-weather-current"]}>
                {/* <img src="./" alt="weather image" /> */}
                <span className={styles["degree-weather-desc"]}>Пасмурно</span>
              </div>
            </div>
            <div className={styles["card-weather-info-wrap"]}>
              <div className={styles["weather-info-box"]}>
                <p className={styles["weather-info-title"]}>
                  <span>По ощущению</span>
                </p>
                <span className={styles["dots"]}></span>
                <span className={styles["current-weather-info"]}>+9</span>
              </div>
              <div className={styles["weather-info-box"]}>
                <p className={styles["weather-info-title"]}>
                  <span>Ветер</span>
                </p>
                <span className={styles["dots"]}></span>
                <span className={styles["current-weather-info"]}>9 м/с, С</span>
              </div>
              <div className={styles["weather-info-box"]}>
                <p className={styles["weather-info-title"]}>
                  <span>Давление</span>
                </p>
                <span className={styles["dots"]}></span>
                <span className={styles["current-weather-info"]}>755 мм рт. ст.</span>
              </div>
              <div className={styles["weather-info-box"]}>
                <p className={styles["weather-info-title"]}>
                  <span>Влажность</span>
                </p>
                <span className={styles["dots"]}></span>
                <span className={styles["current-weather-info"]}>94%</span>
              </div>
              <div className={styles["weather-info-box"]}>
                <p className={styles["weather-info-title"]}>
                  <span>Геомагнитная активность</span>
                </p>
                <span className={styles["current-weather-info"]}>1 балл</span>
              </div>
              <div className={styles["weather-info-box"]}>
                <p className={styles["weather-info-title"]}>
                  <span>Температура воды</span>
                </p>
                <span className={styles["current-weather-info"]}>+16,6</span>
              </div>
            </div>
          </div>
          <div className={styles["right-weather-info"]}></div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
