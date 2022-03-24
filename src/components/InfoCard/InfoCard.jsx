import React from "react";
import classes from "./infoCard.module.css";
import { sexMail, pet } from "../../public/images";

const InfoCard = ({ ...props }) => {
  return (
    <div {...props}>
      <div className={classes.cardBody}>
        <div className={classes.headOfCard}>
          <h3 className={classes.title}>Максим Садиков</h3>
          <h4 className={classes.dateOfBirth}>20.07.2001</h4>
        </div>
        <div className={classes.commonInfo}>
          <div className={classes.infoItem}>
            <h3>
              <span className={classes.boldFont}>Город: </span>Томск
            </h3>
          </div>
          <div className={classes.infoItem}>
            <h3>
              <span className={classes.boldFont}>Пол: </span>мужчина{" "}
            </h3>
            <img className={classes.sexImg} src={sexMail} />
          </div>
          <div className={classes.infoItem}>
            <h3>
              <span className={classes.boldFont}>Возраст: </span>20
            </h3>
          </div>
        </div>
        <div className={classes.description}>
          <p>
            <span className={classes.boldFont}>О себе: </span>
            Всем доброго времени суток! Меня зовут Максим, на данный момент я
            обучаюсь в Томском Политехническом Университете на направлении{" "}
            <span className={classes.quation}>Программная инженерия</span>.
            Обладаю большим количеством хобби, среди которых наибольшее
            предпочтение отдаю игре на музыкальных инструментах и изучению
            английского.
          </p>
          <h3 style={{ marginTop: "20px", fontStyle: "italic" }}>
            BTW: Обладаю вторым взрослым разрядом по лёгкой атлетике, но это
            было очень давно...
          </h3>{" "}
        </div>
        <div className={classes.additionalInfo}>
          <img style={{ marginRight: "12px" }} src={pet} />

          <h3>
            <span className={classes.boldFont}>Домашнее животное: </span>есть
          </h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
