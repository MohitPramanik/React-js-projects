import { useRef, useContext} from "react";
import { MdPostAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {

    const {addNewItem} = useContext(TodoItemsContext)

    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddBtnClicked = (event) => {
        event.preventDefault();
        let todoName = todoNameElement.current.value;
        let todoDate = dueDateElement.current.value;
        if (todoDate !== "" && todoName !== "") {
            addNewItem(todoName, todoDate);
            todoNameElement.current.value = "";
            dueDateElement.current.value = "";
        }
    };

    return (
        <div>
            <div className="container text-center">
                <form
                    className="row d-flex py-1 align-items-center"
                    onSubmit={handleAddBtnClicked}
                >
                    <div className="col-6">
                        <input
                            type="text"
                            placeholder="Enter Todo here"
                            className="h-100"
                            ref={todoNameElement}
                        />
                    </div>
                    <div className="col-4">
                        <input
                            type="date"
                            className="h-100"
                            ref={dueDateElement}
                        />
                    </div>
                    <div className="col-2">
                        <button className="btn bg-success text-white">
                            <MdPostAdd />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTodo;
