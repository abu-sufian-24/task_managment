import { useEffect, useState } from "react";
import Container from "../../component/container";
import logo from "../../images/logo-task.png";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { theme } from "flowbite-react";

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
      <Container className="flex justify-between items-center">
        <img className="dark:brightness-200" src={logo} alt="brand logo" />

        <MdOutlineLightMode onClick={themeHandler} className={`text-xl cursor-pointer ${theme == 'dark' && 'text-white'}`} />

      </Container>
    </div>
  )
}

export default Header