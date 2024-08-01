import React, { useState, useEffect } from 'react';
import '../styles/CountdownTimer.css';
// import timer from '../assets/timer.png'; // Adjust the path to your image

const CountdownTimer = ({ stopTimerForUser, onDayEnd }) => {
    const calculateTimeLeft = () => {
        let now = new Date();
        let endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        let difference = endOfDay - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        if (!stopTimerForUser) {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            if (Object.keys(timeLeft).length === 0) {
                onDayEnd();
            }

            return () => clearTimeout(timer);
        }
    }, [timeLeft, stopTimerForUser, onDayEnd]);

    return (
        <div>
            {/* <div className='image'><img src={timer} alt="Countdown Timer" className="timer-image" /></div> */}
            <div className="countdown-timer">
                {Object.keys(timeLeft).length > 0 ? (
                    <div className="timer">
                        <span>{timeLeft.hours}h</span> : <span>{timeLeft.minutes}m</span> : <span>{timeLeft.seconds}s</span>
                    </div>
                ) : (
                    <div className="timer">
                        <span>00h</span> : <span>00m</span> : <span>00s</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountdownTimer;
