import { useState, useEffect } from 'react'
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';
import css from './App.module.css'

function App() {
    const [values, setValues] = useState(() => {
        const savedValues = localStorage.getItem('values');

        if (savedValues !== null) {
            return JSON.parse(savedValues);
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0
        }
    });

    useEffect(() => {
        localStorage.setItem('values', JSON.stringify(values))
    },[values]);

    const updateFeedback = feedbackType => {
        setValues( values => { 
            return {
                ...values,
                [feedbackType]: values[feedbackType] + 1
            };
    });
    };

    const resetFeedback = () => {
        setValues({good:0, neutral:0, bad:0})
    };

    const totalFeedback = values.good + values.neutral + values.bad;

    const positiveFeedback = totalFeedback !== 0 ? Math.round((values.good / totalFeedback) * 100) : 0;

    return (
        <div className={css.conatiner}>
            <Description/>
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
            {totalFeedback === 0 ? <Notification /> : <Feedback good={values.good} neutral={values.neutral} bad={values.bad}
                totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />}
            </div>
    );
}

export default App
