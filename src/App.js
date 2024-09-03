import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import CountdownTimer from './components/CountdownTimer';
import TaskForm from './components/TaskForm';
import Leaderboard from './components/Leaderboard';
import generateUserId from './utils/generateUserId';

const JSONBIN_BIN_ID = '66d669a2acd3cb34a87da571';
const JSONBIN_API_KEY = '$2a$10$Ni3ejmOdyLfousp.sJ.hmOb23b7EC6KmDuj3nelQH3CRG92rfCW/a';

const App = () => {
    const [userId, setUserId] = useState(localStorage.getItem('userId') || generateUserId());
    const [stopTimerForUser, setStopTimerForUser] = useState(false);
    const [daysCompleted, setDaysCompleted] = useState(0);
    const [leaderboard, setLeaderboard] = useState([]);
    const [taskSubmitted, setTaskSubmitted] = useState(false);

    useEffect(() => {
        localStorage.setItem('userId', userId);
        fetchLeaderboard();
    }, [userId]);

    const fetchLeaderboard = async () => {
        try {
            const response = await axios.get(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
                headers: {
                    'X-Master-Key': JSONBIN_API_KEY
                }
            });
            const storedLeaderboard = response.data.record || [];
            setLeaderboard(storedLeaderboard);
            const user = storedLeaderboard.find(user => user.userId === userId);
            if (user) {
                setDaysCompleted(user.daysCompleted);
                setTaskSubmitted(true);
            }
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };

    const updateLeaderboard = async (updatedLeaderboard) => {
        try {
            await axios.put(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, updatedLeaderboard, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_API_KEY
                }
            });
        } catch (error) {
            console.error('Error updating leaderboard:', error);
        }
    };

    const storeTask = async (task) => {
        const userExists = leaderboard.some(user => user.userId === userId);
        const updatedLeaderboard = userExists
            ? leaderboard.map(user =>
                user.userId === userId ? { ...user, daysCompleted: user.daysCompleted + 1, name: task.name } : user
            )
            : [...leaderboard, { userId, name: task.name, daysCompleted: 1 }];

        updatedLeaderboard.sort((a, b) => b.daysCompleted - a.daysCompleted);
        setLeaderboard(updatedLeaderboard);
        await updateLeaderboard(updatedLeaderboard);
        setStopTimerForUser(true);
        setDaysCompleted(prevDaysCompleted => prevDaysCompleted + 1);
        setTaskSubmitted(true);
    };

    const clearTasks = async () => {
        setStopTimerForUser(false);
        setDaysCompleted(0);
        const updatedLeaderboard = leaderboard.filter(user => user.userId !== userId);
        setLeaderboard(updatedLeaderboard);
        await updateLeaderboard(updatedLeaderboard);
        setTaskSubmitted(false);
    };

    const handleDayEnd = () => {
        setStopTimerForUser(false);
        setTaskSubmitted(false);
        fetchLeaderboard();
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">Papps Self Master - Daily</h1>
            </header>
            <CountdownTimer stopTimerForUser={stopTimerForUser} onDayEnd={handleDayEnd} />
            <div className="content">
                <Leaderboard leaderboard={leaderboard} userId={userId} />
                <TaskForm userId={userId} storeTask={storeTask} daysCompleted={daysCompleted} taskSubmitted={taskSubmitted} />
                <button onClick={clearTasks}>Clear Tasks</button>
            </div>
        </div>
    );
};

export default App;
