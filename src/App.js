import './App.css';
import { useState } from 'react';
import ListDetails from './components/ListDetails/ListDetails';
import Task from './components/Task/Task';
import List from './components/List/List';

const mockLists = [{
  id: 1,
  name: 'Self Learning',
  tasks: [{
    id: 1,
    title: "walk"
  }, {
    id: 2,
    title: "prep your meals"
  }, {
    id: 3,
    title: "meditate"
  }]
},
{
  id: 2,
  name: 'Self Learning 2',
  tasks: [{
    id: 1,
    title: "walk 2"
  }, {
    id: 2,
    title: "prep your meals 2"
  }, {
    id: 3,
    title: "meditate 2"
  }]
},]


function App() {
  const [page, setPage] = useState('list');
  const [listData, setListData] = useState(mockLists);
  const [selectedList , setSelectedList] = useState(mockLists);
  const [selectedTask, setSelectedTask] = useState(mockLists);

  const onEditTask = (task) => {
    // console.log('task', task)
    setPage('task');
    setSelectedTask(task);
  }

  const onSubmittingEdit = (task) => {
    //console.log("from app" , task);
    const updatedMockList = {
      name: selectedList.name,
      tasks: selectedList.tasks.map((item) => {
        if (item.id === task.id) {
          return task;
        } else {
          return item;
        }
      })
    };
    setSelectedList(updatedMockList);
    setPage('listDetails');
  }

  const onListChangeHandler = (addedList) => {
    setListData((prevState)=>[...prevState , addedList])
  }

  const onViewTasks = (list) => {
   // console.log('view task clicked' , list);
    setPage('listDetails');
    setSelectedList(list);
  }

  return (
    <div>
      {
        (page === 'listDetails') ? (
          <ListDetails selectedList={selectedList} onEditTask={onEditTask} />
        ) : (page === 'task') ? (
          <Task selectedTask={selectedTask} onSave={onSubmittingEdit} />
        ) : <List listData={listData} onListChangeHandler={onListChangeHandler} onViewTasks={onViewTasks}/>
      }
    </div>)
}

export default App;
