import React, { useState } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ userId, storeTask, daysCompleted, taskSubmitted }) => {
    const [task, setTask] = useState({ name: '' });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        storeTask({ ...task, userId, daysCompleted });  // Ensure userId and daysCompleted are included
    };

    return (
        <div className="app-container">
         
            <form className="task-form" onSubmit={handleSubmit}>
            <button className="answer-questions-button"> DAILY QUESTIONS</button>
                <div className="form-group">
                <label htmlFor="name">Name: </label>
                    <input className="widths"
                        type="text"
                        id="name"
                        name="name"
                        
                        value={task.name}
                        onChange={handleChange}
                        disabled={taskSubmitted}
                    />
                </div>
                <div className="questions">
               
                    <div className="question-box">
                    
                        <label className='label'>1. Did you wake up at 4:44 am, earlier, or at <br/>
                        an agreed time with Papps Mastery Staff?</label>
                        <div className="radio-group">
                            <label className="label">
                                <input type="radio" name="question1" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question1" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>2. Did you adhere to your written Nutrition<br />
                        Plan (including weighing all your food)?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question2" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question2" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>3. Did you follow your written Workout Plan?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question3" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question3" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>4. Are you free from all the following vices: Alcohol, Drugs, Smoking, Vaping, Porn, Masturbation, Gambling, Lying, Cheating, Stealing?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question4" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question4" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>5. Did you listen to at least 30 minutes of positive inspirational information?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question5" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question5" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>6. Did you post something inspirational on your Facebook or Instagram?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question6" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question6" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>7. Did you demand that you feel powerful after successfully completing each task today?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question7" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question7" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>8. Did you feel an overwhelming sense of joy and gratitude as you woke up?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question8" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question8" value="No" /> No
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="answer-questions-button" disabled={taskSubmitted}>Submit</button>
            </form>
        </div>
    );
};

export default TaskForm;
