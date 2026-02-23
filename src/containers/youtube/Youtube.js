import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Youtube.scss";
import StyleContext from "../../contexts/StyleContext";
import {youtubeSection} from "../../portfolio";

export default function Youtube() {
  const {isDark} = useContext(StyleContext);

  if (!youtubeSection?.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="youtube">
        <div className="youtube-main-div">
          <div className="youtube-header">
            <h1 className={isDark ? "dark-mode youtube-title" : "youtube-title"}>
              {youtubeSection.title}
            </h1>
            <p
              className={
                isDark ? "dark-mode subTitle youtube-subtitle" : "subTitle youtube-subtitle"
              }
            >
              {youtubeSection.subtitle}
            </p>
          </div>

          {youtubeSection.details && (
            <div className={isDark ? "youtube-card youtube-card-dark" : "youtube-card"}>
              <p className={isDark ? "dark-mode youtube-details" : "youtube-details"}>
                {youtubeSection.details}
              </p>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
