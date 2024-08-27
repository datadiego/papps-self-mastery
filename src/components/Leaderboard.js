import React, { useEffect, useState } from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = ({ userId }) => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        const fetchLeaderboardData = () => {
            const storedData = JSON.parse(localStorage.getItem('leaderboard')) || [];
            setLeaderboardData(storedData);
        };

        fetchLeaderboardData();
        const intervalId = setInterval(fetchLeaderboardData, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container">
            <div className="leaderboard-container">
                <header className="app-header">
                    <h1 className="app-title">Papps Self Master - Daily</h1>
                    <h3 className="gold-button">ANSWER DAILY QUESTIONS BELOW</h3>
                </header>
                <h3 className="leaderboard-heading">LEADERBOARD</h3>
                <table className="leaderboard">
                    <thead>
                        <tr>
                            <th>POS</th>
                            <th>Name</th>
                            <th>Days Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((user, index) => (
                            <tr
                                key={user.userId}
                                className={`${index === leaderboardData.length - 1 ? "row-red" : ""} ${user.userId === userId ? "current-user" : ""}`}
                            >
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.daysCompleted}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;