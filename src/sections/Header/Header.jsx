import { useEffect, useState } from "react";
import logo from "../../images/logo-task.png";
import { MdOutlineLightMode } from "react-icons/md";




function Header() {
  let [theme, setTheme] = useState(localStorage.getItem('themMode') || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');

    } else {
      document.documentElement.classList.remove('dark');

    }
    localStorage.setItem('themMode', 'theme');
  }, [theme]);
  let themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }



  return (
    <div className="py-4 border-b  dark:border-[#666]">
      <div className="max-w-screen-xl m-auto px-3 flex justify-between items-center">
        <img className="dark:brightness-200" src={logo} alt="brand logo" />

        <MdOutlineLightMode onClick={themeHandler} className={`text-xl cursor-pointer ${theme == 'dark' && 'text-white'}`} />

      </div>
    </div>
  )
}

export default Header