
import { Table } from "flowbite-react";
import { useState } from "react";
import { ModalPopup } from "../component/ModalPopup";
import { ShowDeletePopup } from "../component/showDeletePopup";

function TableRows(props) {
  const [openModal, setOpenModal] = useState(false);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);

  const editeHandler = (task) => {
    props.onEdite(task);
  };

  const confirmDelete = () => {
    props.onDelet(props.data.id);
    setDeletePopupOpen(false);
  };

  const { id, Title, Description, AssingTo, Priority } = props.data;

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell>{props.index + 1}</Table.Cell>
        <Table.Cell>{Title}</Table.Cell>
        <Table.Cell>{Description}</Table.Cell>
        <Table.Cell>{AssingTo}</Table.Cell>
        <Table.Cell>{Priority}</Table.Cell>
        <Table.Cell className="">
          <button onClick={() => setOpenModal(true)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">
            Edit
          </button>
          <button onClick={() => setDeletePopupOpen(true)} className="font-medium text-rose-600 hover:underline dark:text-rose-500">
            Delete
          </button>
        </Table.Cell>
      </Table.Row>

      {/* Edit Modal */}
      <ModalPopup taskEdite={props.data} onEdite={editeHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />

      {/* Delete Confirmation Popup */}
      <ShowDeletePopup
        open={deletePopupOpen}
        onConfirm={confirmDelete}
        onCancel={() => setDeletePopupOpen(false)}
      />
    </>
  );
}

export default TableRows;
