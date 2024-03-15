import TodoItem from './TodoItem'
import { TodoItemsContext } from '../store/todo-items-store'
import { useContext } from 'react'

function TodoItems() {

  const {todoItems, deleteItem } = useContext(TodoItemsContext)

  return (
    <>
        {
            todoItems.map(items => 
                <TodoItem key={[items.name, items.dueDate]} item={items.name} date={items.dueDate}
                handleDelete={deleteItem} />
            )
        }
    </>
  )
}

export default TodoItems
