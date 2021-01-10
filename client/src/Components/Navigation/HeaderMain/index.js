import "./index.scss";
import logo from "./logo-main.png";
import { Link, useHistory } from "react-router-dom";
import iconSet from "./selection.json";
import IcomoonReact from "icomoon-react";
import * as AC from "../../../redux/actions/authForm";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../../redux/actions/filterText";
import { filterCategory } from "../../../redux/actions/filterCategory";
import { filterSize } from "../../../redux/actions/filterSize";
import { filterPrice } from "../../../redux/actions/filterPrice";
import { filterColor } from "../../../redux/actions/filterColor";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { langHandler } from "../../../redux/actions/language";

const HeaderMain = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favourites);
  const userBasket = useSelector((state) => state.user.basket);

  const [scroll, setScroll] = useState(true);
  const [languageLogo, setLanguageLogo] = useState("ENG");
  const [url, setUrl] = useState(window.location.pathname);

  const changeLanguage = () => {
    languageLogo === "ENG" ? setLanguageLogo("RUS") : setLanguageLogo("ENG");
    dispatch(langHandler());
  };

  useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        const scrollCheck = window.scrollY < 100;

        if (scrollCheck !== scroll) {
          setScroll(scrollCheck);
        }
      },
      []
    );

    document.addEventListener("click", () => {
      setUrl(window.location.pathname);
    });
  }, [scroll, url]);

  const clickHandler = () => {
    dispatch(filterProducts(""));
    dispatch(filterCategory(""));
    dispatch(filterColor(""));
    dispatch(filterSize(""));
    dispatch(filterPrice(-1));

    scroller.scrollTo("banner", {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const user = useSelector((state) => state.user);
  const history = useHistory();
  const userNavClick = (userId) => {
    !userId ? dispatch(AC.showAuthForm()) : history.push("/cabinet");
  };
  const favoritesNavClick = (userId) => {
    !userId ? dispatch(AC.showAuthForm()) : history.push("/favorites");
  };
  const basketNavClick = (userId) => {
    !userId ? dispatch(AC.showAuthForm()) : history.push("/basket");
  };

  return (
    <div
      className={`${
        scroll && url === "/" ? "header-main" : "header-main-reverse"
      }`}
    >
      <div
        className={`${
          scroll && url === "/"
            ? "header-main__logo"
            : "header-main__logo-reverse"
        }`}
      >
        <span>
          <Link to={"/"}>
            <img
              onClick={clickHandler}
              className={`${
                scroll && url === "/" ? "main-logo" : "main-logo-reverse"
              }`}
              src={logo}
              alt="Alibabart"
            />
          </Link>
        </span>
      </div>

      <div className="header-main__user-nav">
        <span
          className="header-main__user-nav--el"
          onClick={() => changeLanguage()}
        >
          {languageLogo}
        </span>
        <span className="header-main__user-nav--el">
          <IcomoonReact
            onClick={() => userNavClick(user.id)}
            iconSet={iconSet}
            className="user-nav__icon user-logo"
            icon="user"
          />
        </span>
        {user.firstname ? (
          <span onClick={() => userNavClick(user.id)} className="user-name">
            {user.firstname}
          </span>
        ) : null}
        <span className="header-main__user-nav--el">
          <IcomoonReact
            onClick={() => favoritesNavClick(user.id)}
            iconSet={iconSet}
            className="user-nav__icon"
            icon={`${favorites.length ? "star-full" : "star-empty"}`}
          />
        </span>
        <span
          onClick={() => favoritesNavClick(user.id)}
          className={`${
            favorites.length ? "fav-count" : "fav-count disable-count"
          }`}
        >
          {favorites.length}
        </span>
        <span className="header-main__user-nav--el">
          <IcomoonReact
            onClick={() => basketNavClick(user.id)}
            iconSet={iconSet}
            className="user-nav__icon"
            icon="cart"
          />
        </span>
        <span
          onClick={() => basketNavClick(user.id)}
          className={`${
            userBasket.length ? "fav-count" : "fav-count disable-count"
          }`}
        >
          {userBasket.length}
        </span>
      </div>
    </div>
  );
};

export default HeaderMain;
