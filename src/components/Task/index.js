import {TaskItem, Title, Icon} from './styledComponents'

const Task = props => {
  const {taskDetails, deleteTask} = props
  const {id, title} = taskDetails
  const onClickDelete = () => deleteTask(id)
  return (
    <TaskItem>
      <Title>{title}</Title>
      <Icon onClick={onClickDelete}
      src="https://static.vecteezy.com/system/resources/previews/020/235/853/original/delete-icon-isolated-on-black-delete-symbol-suitable-for-graphic-design-and-websites-on-a-white-background-free-vector.jpg" />
    </TaskItem>
  )
}

export default Task
