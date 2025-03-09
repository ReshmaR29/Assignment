import {useState} from 'react'
import Task from '../Task'
import {
  BgContainer,
  TaskTracker,
  CreateTaskForm,
  Heading,
  InputBox,
  Button,
  TasksContainer,
} from './styledComponents'

const TaskTrackerApp = () => {
  const [taskList, setTaskList] = useState([])
  const [title, setTitle] = useState('')

  const onChangeTitle = event => setTitle(event.target.value)

  const deleteTask = id => {
    const filteredTaskList = taskList.filter(each => each.id !== id)
    setTaskList(filteredTaskList)
  }

  const addTask = event => {
    event.preventDefault()
    const newTask = {
      id: taskList.length + 1,
      title,
    }
    setTaskList(prevState => [...prevState, newTask])
    setTitle('')
  }

  return (
    <BgContainer>
      <TaskTracker>
        <Heading>Task Tracker</Heading>
        <CreateTaskForm>
          <InputBox
            placeholder="Add a new task..."
            onChange={onChangeTitle}
            value={title}
          />
          <Button type="submit" onClick={addTask}>
            Add Task
          </Button>
        </CreateTaskForm>
        <TasksContainer>
          {taskList.map(each => (
            <Task key={each.id} taskDetails={each} deleteTask={deleteTask}/>
          ))}
        </TasksContainer>
      </TaskTracker>
    </BgContainer>
  )
}
export default TaskTrackerApp
