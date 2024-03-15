import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
});

const todoItemsReducer = (currentTodoItems, action) => {
    let newTodoItems = currentTodoItems;

    if (action.type === "NEW_ITEM") {
        newTodoItems = [
            ...currentTodoItems,
            {
                name: action.payload.todoName,
                dueDate: action.payload.todoDate,
            },
        ];
    } 
    else if (action.type === "DELETE_ITEM") {
        newTodoItems = currentTodoItems.filter(
            (element) => element.name !== action.payload.item
        );
    }

    return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    const addNewItem = (todoName, todoDate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                todoName,
                todoDate,
            },
        };
        dispatchTodoItems(newItemAction);
    };

    const deleteItem = (item) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                item: item,
            },
        };
        dispatchTodoItems(deleteItemAction);
    };

    return (
        <TodoItemsContext.Provider
            value={{
                todoItems,
                addNewItem,
                deleteItem,
            }}
        >
            {children}
        </TodoItemsContext.Provider>
    );
};

export default TodoItemsContextProvider;
