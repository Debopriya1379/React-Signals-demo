import '../App.css'
import { newTodoName } from '../states/allStates'

const Todos = ({todos}) => {

  console.log("TodoComponent")

  function addTodo(e){
    e.preventDefault()
    todos.value = [
      ...todos.value,
      { id : crypto.randomUUID(), name: newTodoName.value, completed: false},
    ]
    // newTodoName.value=""
  }

  function toggleTodo(id, completed){
    todos.value = todos.value.map(todo => {
      if(todo.id===id){
        return {...todo,completed}
      }
      return todo
    })
  }

  return (
    <div className='todos'>
        <div className="new">
            <h2>Create New Todo ...</h2>
            <input 
              type="text" 
              // value={newTodoName.value}
              onChange={e=>newTodoName.value=e.target.value}
            />
            <button onClick={addTodo}>Add</button>
        </div>
        <div className="alltodos">
            <h2>All Todos</h2>
            <div className="list">
                {todos.value.map((todo)=>{
                    return(
                      <div key={todo.id} className="to-do">
                          <input 
                            type="checkbox" 
                            checked={todo.completed}
                            onChange={e=> toggleTodo(todo.id, e.target.checked)}
                          />
                          <span>{todo.name}</span>
                      </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Todos