import React from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
    return (
        <div className="leaderboard-container">
            <header className="app-header">
                <h1 className="app-title">Papps Self Master - Daily</h1>
                <h3 className="answer-questions-button">ANSWER DAILY QUESTIONS BELOW</h3>
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
                    {leaderboard.map((user, index) => (
                        <tr key={user.userId}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.daysCompleted}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
