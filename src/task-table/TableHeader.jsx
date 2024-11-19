
import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";



function TableHeader({ onSearch }) {


  let changeHandeler = (e) => {
    let val = e.target.value;

    onSearch(val)
  }
  return (
    <div className="flex justify-between items-center mt-5 mb-8">
      <h2 className="text-2xl font-bold dark:text-[#666]">Your Tasks</h2>
      <div className="max-w-lg">
        <TextInput onChange={changeHandeler} id="email4" type="email" rightIcon={FiSearch} required />
      </div>
    </div>
  )
}

export default TableHeader