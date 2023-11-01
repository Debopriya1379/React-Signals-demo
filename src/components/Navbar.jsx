import React from 'react'
import '../App.css'
import { computed } from '@preact/signals-react'

const Navbar = ({todos}) => {

    console.log("Navbar")

    const completedTodosCount = computed(()=>{
        return todos.value.filter(todo => todo.completed).length
    })
  return (
    <div className='navbar'>
        <h3>Navbar</h3>
        <span>completed : {completedTodosCount.value}</span>
    </div>
  )
}

export default Navbar