import React from "react";
import {Fade} from "react-reveal";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  if (!cardInfo) {
    return null;
  }

  const {title, description, image, imageAlt, imageSize, footer} = cardInfo;
  const normalizedImageSize =
    imageSize === "sm" ||
    imageSize === "md" ||
    imageSize === "lg" ||
    imageSize === "xl"
      ? imageSize
      : "md";

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={
          isDark
            ? "dark-mode project-card project-card-dark"
            : "project-card project-card-light"
        }
      >
        {image ? (
          <div className="project-image">
            <img
              src={image}
              alt={imageAlt || title || "Extracurricular"}
              className={`card-image card-image-${normalizedImageSize}`}
            ></img>
          </div>
        ) : null}

        <div className="project-detail">
          {title && (
            <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
              {title}
            </h5>
          )}
          {description && (
            <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
              {description}
            </p>
          )}

          {Array.isArray(footer) && footer.length > 0 ? (
            <div className="project-card-footer">
              {footer.map((link, i) => (
                <span
                  key={`${link.name || "link"}-${i}`}
                  className={isDark ? "dark-mode project-tag" : "project-tag"}
                  onClick={() => openUrlInNewTab(link.url)}
                >
                  {link.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Fade>
  );
}
