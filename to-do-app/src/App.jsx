import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";
import "./App.css";

function App() {

    return (
        <>
            <TodoItemsContextProvider>
                <AppName />
                <AddTodo />
                <WelcomeMessage />
                <TodoItems />
            </TodoItemsContextProvider>
        </>
    );
}

export default App;
