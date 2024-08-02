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
                <button className="gold-button"> DAILY QUESTIONS</button>
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
                        <label className='label'>1. Did you wake up at 4:44 am, earlier, or at an agreed time with Papps Mastery Staff?</label>
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
                        <label>2. Did you adhere to your written Nutrition Plan (including weighing all your food)?</label>
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
                        <label>8. Did you read your Life Statement at least three times throughout the day?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question8" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question8" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>9. Did you do your visualization twice today, with one session just before sleep?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question9" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question9" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>10. Did you complete your diary/journal entry?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question10" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question10" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>11. Did you do your AUM meditation or prayer?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question11" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question11" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>12. Did you wake up and go to the gym this morning, or complete 50 burpees, or 100 bodyweight squats?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question12" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question12" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>13. Did you plan your day (written plan, ideally using software like Google Calendar or Outlook for appointments and Google Tasks or Asana for tasks)?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question13" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question13" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>14. Did you prioritize your tasks, identifying 'PRIORITY TASKS' that must be completed today with no excuses?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question14" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question14" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>15. Did you complete all high-priority tasks for the day?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question15" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question15" value="No" /> No
                            </label>
                        </div>
                    </div>
                    <div className="question-box">
                        <label>16. Did you invest 30 minutes in Silence witnessing your thoughts?</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="question16" value="Yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name="question16" value="No" /> No
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="gold-button" disabled={taskSubmitted}>Submit</button>
            </form>
        </div>
    );
};

export default TaskForm;
