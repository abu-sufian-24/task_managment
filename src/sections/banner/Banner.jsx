

import bannerImage from "../../images/banner-img.png"


function Banner() {
  return (
    <div className="max-w-screen-xl m-auto px-3 grid sm:grid-cols-2 gap-6 items-center">
      <div className="text-center sm:text-left">
        <h1 className="text-5xl text-rose-700 font-bold mb-3 dark:text-yellow-300">Task  Management</h1>
        <p className="text-lg dark:text-stone-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
      </div>
      <div className="hidden sm:block mx-auto">
        <img className="max-w-sm" src={bannerImage} alt="" />
      </div>
    </div>
  )
}

export default Banner