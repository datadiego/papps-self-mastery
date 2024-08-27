import React, { useState, useEffect } from 'react';
import './styles/App.css';
import CountdownTimer from './components/CountdownTimer';
import TaskForm from './components/TaskForm';
import Leaderboard from './components/Leaderboard';
import generateUserId from './utils/generateUserId';

const App = () => {
    const [userId, setUserId] = useState(localStorage.getItem('userId') || generateUserId());
    const [stopTimerForUser, setStopTimerForUser] = useState(false);
    const [daysCompleted, setDaysCompleted] = useState(0);
    const [leaderboard, setLeaderboard] = useState([]);
    const [taskSubmitted, setTaskSubmitted] = useState(false);

    useEffect(() => {
        localStorage.setItem('userId', userId);
        const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        setLeaderboard(storedLeaderboard);
        const user = storedLeaderboard.find(user => user.userId === userId);
        if (user) {
            setDaysCompleted(user.daysCompleted);
            setTaskSubmitted(true);
        }
    }, [userId]);

    const storeTask = (task) => {
        const userExists = leaderboard.some(user => user.userId === userId);
        const updatedLeaderboard = userExists
            ? leaderboard.map(user =>
                user.userId === userId ? { ...user, daysCompleted: user.daysCompleted + 1, name: task.name } : user
            )
            : [...leaderboard, { userId, name: task.name, daysCompleted: 1 }];

        updatedLeaderboard.sort((a, b) => b.daysCompleted - a.daysCompleted);
        setLeaderboard(updatedLeaderboard);
        localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard));
        setStopTimerForUser(true);
        setDaysCompleted(prevDaysCompleted => prevDaysCompleted + 1);
        setTaskSubmitted(true);
    };

    const clearTasks = () => {
        setStopTimerForUser(false);
        setDaysCompleted(0);
        const updatedLeaderboard = leaderboard.filter(user => user.userId !== userId);
        setLeaderboard(updatedLeaderboard);
        localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard));
        setTaskSubmitted(false);
    };

    const handleDayEnd = () => {
        setStopTimerForUser(false);
        setTaskSubmitted(false);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">Papps Self Master - Daily</h1>
            </header>
            <CountdownTimer stopTimerForUser={stopTimerForUser} onDayEnd={handleDayEnd} />
            <div className="content">
                <Leaderboard userId={userId} />
                <TaskForm userId={userId} storeTask={storeTask} daysCompleted={daysCompleted} taskSubmitted={taskSubmitted} />
                <button onClick={clearTasks}>Clear Tasks</button>
            </div>
        </div>
    );
};

export default App;