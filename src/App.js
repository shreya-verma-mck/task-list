import './App.css';
import { useState } from 'react';
import ListDetails from './components/ListDetails/ListDetails';
import Task from './components/Task/Task';
import List from './components/List/List';
const mockList = [{
  id:1,
  name: 'Self Learning',
  tasks: [{
    id:1,
    title: "walk"
  }, {
    id:2,
    title: "prep your meals"
  }, {
    id:3,
    title: "meditate"
  }]
},
{
  id:2,
  name: 'Self Learning 2',
  tasks: [{
    id:1,
    title: "walk 2"
  }, {
    id:2,
    title: "prep your meals 2"
  }, {
    id:3,
    title: "meditate 2"
  }]
},]


function App() {
  const [page, setPage] = useState('list');
  const [listData, setListData] = useState(mockList);
  const [selectedTask, setSelectedTask] = useState(mockList);

  const onEditTask = (task) => {
    // console.log('task', task)
    setPage('task');
    setSelectedTask(task);
  }

  const onSubmittingEdit = (task) => {
    //console.log("from app" , task);
    const updatedMockList = {
      name: listData.name,
      tasks: listData.tasks.map((item) => {
        if (item.id === task.id) {
          return task;
        } else {
          return item;
        }
      })
    };
    setListData(updatedMockList);
    setPage('list');
  }

  return (<div>
    {page === 'list' ? (
      <ListDetails listData={listData} onEditTask={onEditTask} />
    ) : (
      <Task selectedTask={selectedTask} onSave={onSubmittingEdit} />
    )}
  </div>)
}

export default App;
