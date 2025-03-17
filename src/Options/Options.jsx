import css from './Options.module.css'

export default function Options({updateFeedback, totalFeedback, resetFeedback}) {
    return (
    <div className={css.buttonsContainer}>
        <button className={css.buttons} onClick={() => updateFeedback('good')}>Good</button>
        <button className={css.buttons} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={css.buttons} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback !== 0 && <button className={css.buttons} onClick={resetFeedback}>Reset</button>}
        </div>
    )
}