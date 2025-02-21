import style from './ProfileHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import Button from '../ButtonDemoBooking/Button.js';
import CEOImage from '../../assets/ceoImage-removebg-preview.png';
import React, { useEffect, useState } from 'react';
import clock from '../../assets/3d-alarm.png';

const ProfileHeader = () => {
    
        const [timeLeft, setTimeLeft] = useState(15 * 60);
        const [showBanner, setShowBanner] = useState(false);
         // Timer
            useEffect(() => {
                const timer = setInterval(() => {
                    setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
                }, 1000);
        
                return () => clearInterval(timer);
            }, []);
        
            const formatTime = (seconds) => {
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return `${mins}:${secs.toString().padStart(2, "0")}`;
            };
    
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            console.log("Scroll Percentage:", scrollPercentage);

            if (scrollPercentage > 35) {
                setShowBanner(true);
            } else {
                setShowBanner(false);
            }
        };
       window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    

    return (
        <>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <p className={`${style.topText} fw-bold fs-4 fs-6 p-3`}>
                        <span style={{ color:'#ffd702'}}>Dream Jobs Made Easy: </span>&nbsp;FREE Career Success Masterclass for Everyone!
                    </p>
                    <p className={`${style.headerText} fw-bold fs-1 my-3 col-xl-10`}>
                        Fast-Track Your Career Like the <span style={{ color: '#553cdf' }}>Top 1% Achievers</span>
                    </p>
                    <p className={`${style.lowerText} fs-4 fs-6 col-xl-10`}>
                        Achieve Salaries of Up to '12 LPA' with Proven Strategies to Build In-Demand Skills, Excel in Interviews, and Advance Like Top Professionals. Create a Clear Career Roadmap for Sustained Success in High-Growth Tech Roles.
                    </p>
                </div>
                <div className={`${style.profileImage} row align-items-center my-2`}>
                    <div className="col-md-6 text-center">
                        <div className="d-flex flex-column align-items-center">
                            <div className="">
                                <img
                                    src={CEOImage}
                                    alt="Rajiv Talreja"
                                    className="img-fluid"
                                />
                            </div>
                            <div className={`${style.profileDetails} text-white rounded-3 px-4 py-3`} style={{ background: '#090820', width: '90%' }}>
                                <p className='fs-4 fw-bold text-warning'>Mahesh Babu Channa</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '10px' }}>IIM Alumni | 8+ Years Experienced Career Consultant</p>
                                <p style={{ fontSize: '1.2rem' }}>Trained Over <span style={{ color: '#553cdf', fontWeight: '700' }}>8,500+ Professionals</span> since 2014</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="p-4 rounded">
                            <p className="fw-bold text-center fs-4 mb-4">Career Demo Class Details</p>
                            <div className="d-flex justify-content-around mb-4">
                                <div className="border p-3 rounded d-flex align-items-center" style={{ width: "45%", height: '70px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)' }}>
                                    <span
                                        style={{
                                            backgroundColor: "#625BCC",
                                            borderRadius: "50%",
                                            padding: "10px",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: "8px",
                                            width: '40px',
                                            height: '40px',

                                        }}
                                    >
                                        <FontAwesomeIcon icon={faHourglass} style={{ color: "white" }} />
                                    </span>
                                    <div className={style.DemoVenue}>
                                        <p className="mb-1">DURATION</p>
                                        <p className="fw-bold">2 Hours</p>
                                    </div>
                                </div>
                                <div className="border p-3 rounded d-flex align-items-center" style={{ width: "45%", height: '70px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)' }}>
                                    <span
                                        style={{
                                            backgroundColor: "#625BCC",
                                            borderRadius: "50%",
                                            padding: "10px",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: "8px",
                                            width: '40px',
                                            height: '40px'
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faVideo} style={{ color: "white" }} />
                                    </span>
                                    <div className={style.DemoVenue}>
                                        <p className="mb-1">VENUE</p>
                                        <p className="fw-bold">Online</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileHeader;
