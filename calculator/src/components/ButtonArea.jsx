import ButtonRow from "./ButtonRow";

function ButtonArea({ btnValue, handleClick }) {
    return (
        <>
            <div className="container" id="btn-area">
                {btnValue.map((rowValues) => (
                    <ButtonRow
                        key={rowValues}
                        rowValues={rowValues}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </>
    );
}

export default ButtonArea;
