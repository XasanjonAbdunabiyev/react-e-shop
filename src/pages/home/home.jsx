import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
// images cart
import cart1 from "../../assets/images/cart1.png";
import cart2 from "../../assets/images/cart2.svg";
import cart3 from "../../assets/images/cart3.png";
import cart4 from "../../assets/images/cart4.svg";
import "./home.scss";
function Home() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <h1 className="home__title">{i18next.t("pages_title")}</h1>
          <h2 className="home__desc__title">{i18next.t("home_desc_title")}</h2>
          <p className="home__desc">{i18next.t("home__desc")}</p>
        </div>
        <div className="home__wrapper">
          <div className="home__carts" data-aos="fade-right">
            <div className="home__carts__img">
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={cart1}
                alt=""
              />
            </div>
            <div className="home__cart__content">
              <h4>Вакансия! Требуется контент-менеджер </h4>
              <p>
                Интернет-магазину V-COMP на постоянную работу, требуется
                контент-менеджер. Работа удаленно на дому, не сложная...
              </p>
            </div>
          </div>
          <div className="home__carts" data-aos="fade-left">
            <div className="home__carts__img">
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={cart2}
                alt=""
              />
            </div>
            <div className="home__cart__content">
              <h4>Бесплатная сборка ПК</h4>
              <p>
                Друзья! При покупке всех комплектующих для ПК в нашей компании,
                сборка ПК бесплатно. Вам не нужно тратить время и рисковать...
              </p>
            </div>
          </div>
          <div className="home__carts" data-aos="fade-right">
            <div className="home__carts__img">
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={cart3}
                alt=""
              />
            </div>
            <div className="home__cart__content">
              <h4>Бесплатная доставка</h4>
              <p>
                Бесплатная доставка по Днепру (курьером) при покупке от 3000
                грн. (Подробнее в разделе Оплата и доставка)...
              </p>
            </div>
          </div>
          <div className="home__carts" data-aos="fade-left">
            <div className="home__carts__img">
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={cart4}
                alt=""
              />
            </div>
            <div className="home__cart__content">
              <h4>Акция! Подготовь ноутбук к лету! </h4>
              <p>
                У нас ежегодная акция "Подготовь ноутбук к лету!" 50% скидка на
                чистку ноутбука, 15.05.19-15.06.19 В чистку входит...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
