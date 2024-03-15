import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"

function WelcomeMessage() {

  const {todoItems} = useContext(TodoItemsContext)

  return (
    <>
        {todoItems.length === 0 &&  <center className="fw-bold text-primary">Enjoy your day</center> }
    </>
  )
}

export default WelcomeMessage
