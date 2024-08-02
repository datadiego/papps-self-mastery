import React from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
    // Dummy data to use if no leaderboard prop is provided
    const defaultData = [
        { userId: 1, name: 'USER 1', daysCompleted: 100 },
        { userId: 2, name: 'USER 2', daysCompleted: 90 },
        { userId: 3, name: 'USER 3', daysCompleted: 80 },
        { userId: 4, name: 'USER 4', daysCompleted: 70 },
    ];

    const data = leaderboard && leaderboard.length ? leaderboard : defaultData;

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
                    {data.map((user, index) => (
                        <tr
                            key={user.userId}
                            className={
                                index === data.length - 1 ? "row-red" : ""
                            }
                        >
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
