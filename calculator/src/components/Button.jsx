function Button({ value, handleClick }) {
    return (
        <>
            <input
                type="button"
                value={value}
                className="btn"
                onClick={handleClick}
            />
        </>
    );
}

export default Button;
