import React from "react";

const Education = () => {
  return (
    <div className="education__container container">
      <div className="education__sections">
        <div className="education__content">
          <div className="education__data">
            <div>
              <h3 className="education__title">Bachelor of Informatics</h3>
              <span className="education__subtitle">
                Technical University of Munich
              </span>
              <div className="education__calendar">
                <i className="uil uil-calendar-alt"></i> Oct 2022 - present
              </div>
            </div>

            <div>
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>
          </div>

          <div className="education__data">
            <div></div>

            <div>
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>

            <div>
              <h3 className="education__title">Studienkolleg T-Kurs</h3>
              <span className="education__subtitle">
                International Student College of Kaiserslautern, Germany
              </span>
              <div className="education__calendar">
                <i className="uil uil-calendar-alt"></i> Mar - Jun 2022
              </div>
            </div>
          </div>

          <div className="education__data">
            <div>
              <h3 className="education__title">Senior High School</h3>
              <span className="education__subtitle">
                UPH College Tangerang, Indonesia
              </span>
              <div className="education__calendar">
                <i className="uil uil-calendar-alt"></i> Jul 2018 - May 2021
              </div>
            </div>

            <div>
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
