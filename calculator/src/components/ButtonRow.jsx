import Button from "./Button";

function ButtonRow({ rowValues, handleClick }) {
    return (
        <>
            <div className="row">
                {rowValues.map((btn) => (
                    <Button key={btn} value={btn} handleClick={handleClick} />
                ))}
            </div>
        </>
    );
}

export default ButtonRow;
