import Footer from "../sections/footer/Footer"
import Header from "../sections/Header/Header"
import Banner from "../sections/banner/Banner"
import TaskTable from "../task-table/TaskTable"
import Container from "../component/Container";




function Layout() {
  return (
    <Container>
      <Header />
      <Banner />
      <TaskTable />
      <Footer />
    </Container>
  )
}

export default Layout