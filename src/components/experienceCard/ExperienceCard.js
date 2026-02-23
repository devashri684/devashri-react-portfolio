import React from "react";
import "./ExperienceCard.scss";
import {Fade} from "react-reveal";

export default function ExperienceCard({cardInfo, isDark}) {
  if (!cardInfo) {
    return null;
  }

  const {company, role, date, desc, companylogo, descBullets} = cardInfo;

  const hasBullets = Array.isArray(descBullets) && descBullets.length > 0;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={
          isDark ? "experience-card experience-card-dark" : "experience-card"
        }
      >
        <div className="experience-card-header">
          {companylogo && (
            <img
              className="experience-card-logo"
              src={companylogo}
              alt={company || "company"}
            />
          )}
          <div className="experience-card-header-text">
            {role && <h3 className="experience-card-role">{role}</h3>}
            {company && <h4 className="experience-card-company">{company}</h4>}
            {date && (
              <p
                className={
                  isDark
                    ? "experience-card-date dark-mode"
                    : "experience-card-date"
                }
              >
                {date}
              </p>
            )}
          </div>
        </div>

        {desc && (
          <p className={isDark ? "experience-card-desc dark-mode" : "experience-card-desc"}>
            {desc}
          </p>
        )}

        {hasBullets && (
          <ul className="experience-card-bullets">
            {descBullets.map((bullet, i) => (
              <li key={i} className={isDark ? "dark-mode subTitle" : "subTitle"}>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Fade>
  );
}
