


import { Button, Modal, Textarea, Label, TextInput, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  Title: yup.string().required().min(5),
  Description: yup.string().required().min(5),
  AssingTo: yup.string().required(),
  Priority: yup.string().required(),
}).required();


export function ModalPopup({ onOpen, onClose, onCreate, taskEdite, onEdite }) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });



  const onSubmit = ((data) => {
    if (taskEdite) {
      onEdite(data);
    } else {
      onCreate(data);
    }
    reset();
    onClose();
  })
  let formData = taskEdite || {
    id: crypto.randomUUID(),
    Title: null,
    Description: null,
    AssingTo: null,
    Priority: null,
  }


  return (
    <>
      <Modal show={onOpen} onClose={() => onClose()}>
        <Modal.Header>{taskEdite ? 'Edit Task' : 'Add Task'}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Title" value="Title" />
                </div>

                <input defaultValue={formData.id} {...register("id")} type="hidden" />

                <TextInput defaultValue={formData.Title} {...register("Title", { required: true, minLength: 8, maxLength: 10 })} id="email1" type="text" />
                {errors.Title && <span className="text-red-500">{errors.Title.message}</span>}

              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Description" />
                </div>
                <Textarea defaultValue={formData.Description} {...register("Description", { required: true })} id="comment" rows={4} />
                <span className="text-red-500">{errors.Description?.message}</span>
              </div>
              <div className="flex">
                <div className="w-2/3 pr-2">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Assing To" />
                  </div>
                  <Select defaultValue={formData.AssingTo} {...register("AssingTo", { required: true })} id="countries">
                    <option value="person one">person one</option>
                    <option value="person two">person two</option>
                    <option value="person three">person three</option>
                    <option value="person for">person for</option>
                  </Select>
                  <span className="text-red-500">{errors.AssingTo?.message}</span>
                </div>
                <div className="w-1/3">
                  <div className="mb-2 block">
                    <Label htmlFor="	Priority" value="	Priority" />
                  </div>
                  <Select defaultValue={formData.Priority} {...register("Priority", { required: true })} id="countries">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </Select>
                  <span className="text-red-500">{errors.Priority?.message}</span>
                </div>
              </div>
              <Button type="submit" className="mt-4">{taskEdite ? 'Edit Task' : 'Add Task'}</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
