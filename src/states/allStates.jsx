import { effect, signal } from '@preact/signals-react'

const local_storage_key = "Todos"

export const todos = signal(getTodos())
export const newTodoName = signal("")

function getTodos(){
  const value = localStorage.getItem(local_storage_key)
  if(value==null) return []
  return JSON.parse(value)
}

effect(()=>{
  localStorage.setItem(local_storage_key, JSON.stringify(todos.value))
})