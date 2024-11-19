export default function taskReducer(tasks, action) {
  if (action.type === 'added') {
    return [...tasks, action.item];
  } else if (action.type === 'edited') {
    return tasks.map(item => {
      if (action.task.id === item.id) {
        return action.task;
      } else {
        return item;
      }
    });
  } else if (action.type === 'deleted') {
    return tasks.filter(item => {
      return item.id != action.id;
    });
  } else if (action.type === 'cleared') {
    return action.del;
  }
}
