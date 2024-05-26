export const Cancel = ({early, late}) => {
    return (
        <div className="summary__cancel">
            <h3>Storno podmínky</h3>
            <div className="summary__cancel-text">
            <p>
                {early}
            </p>
            <p>
                {late}
            </p>
            </div>
        </div>
    )
}