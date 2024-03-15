import { MdDelete } from "react-icons/md";

function TodoItem({ item, date, handleDelete }) {
    return (
        <>
            <div className="container text-center">
                <div className="row d-flex py-1 align-items-center">
                    <div className="col-6 item">{item}</div>
                    <div className="col-4 item">{date}</div>
                    <div className="col-2 item">
                        <button
                            type="button"
                            className="btn bg-danger text-white"
                            onClick={() => handleDelete(item)}
                        >
                            <MdDelete />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoItem;
