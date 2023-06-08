import React, { useState } from 'react';
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(1) } 
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className= {toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(2) }
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Intern/Certification
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">MCA - Computer Application</h3>
                                <span className="qualification__subtitle">SRM University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">B.Sc - Computer Science</h3>
                                <span className="qualification__subtitle">Sadakathullah Appa College</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2020
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">Sri Jayendra Matric Hr.Sec.School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2015-2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">SSLC</h3>
                                <span className="qualification__subtitle">Schaffter Hr.Sec.School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2014-2015
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Trainee Software Developer</h3>
                                <span className="qualification__subtitle">Scopiq Technologies</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>Jan - April 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">STAR CODERS 2023 - Competition</h3>
                                <span className="qualification__subtitle">Runner with cash prize</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">28 April 2023</i>
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">The Fundamental of Digital Marketing Certificate</h3>
                                <span className="qualification__subtitle">Google Digital Garage</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification