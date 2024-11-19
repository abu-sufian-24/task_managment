import Container from "../component/container";
import { Button } from "flowbite-react";
import TableHeader from "./TableHeader";
import { Table } from "flowbite-react";
import TableRows from "./TableRows";
import { ModalPopup } from "../component/ModalPopup";
import { useReducer, useState } from "react";
import taskReducer from "../component/reducer/Reducer";


// Reducer function to handle task actions
// function taskReducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return [action.payload, ...state]; // Adds new task and reverses the order
//     case "edit":
//       return state.map(task => (task.id === action.payload.id ? action.payload : task));
//     case "delete":
//       return state.filter(task => task.id !== action.payload);
//     case "clear":
//       return [];
//     default:
//       return state;
//   }
// }

function NoData() {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell colSpan={6} className="text-center">No Data Found</Table.Cell>
    </Table.Row>
  );
}

function TaskTable() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, dispatch] = useReducer(taskReducer, []); // Using useReducer for tasks
  const [search, setSearch] = useState('');

  let createHandler = item => {
    // dispatch(updeteTask.reverse());
    dispatch({
      type: 'added',
      item,
    })


  };

  let editeHandler = task => {
    dispatch({
      type: 'edited',
      task,
    })


  };

  let deletHandler = id => {
    dispatch({
      type: 'deleted',
      id,
    })

  };


  const clearHandler = () => {

    dispatch({
      type: 'cleared',
      del: [],
    })

  };

  const updateText = tasks.filter(item => {
    return item.Title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Container className="mt-8">
      <div className="justify-center flex sm:justify-end ">
        <Button onClick={() => setOpenModal(true)} className="mr-2" color="success">Add Task</Button>
        <Button onClick={clearHandler} color="failure">Clear Task</Button>
      </div>
      <div className="p-2 rounded-sm border my-6">
        <TableHeader onSearch={(text) => setSearch(text)} />
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Assigned To</Table.HeadCell>
              <Table.HeadCell>Priority</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {tasks.length === 0 ? <NoData /> : updateText.map((item, index) => (
                <TableRows onEdite={editeHandler} onDelet={deletHandler} data={item} index={index} key={item.id} />
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
      <ModalPopup onCreate={createHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
    </Container>
  );
}

export default TaskTable;
