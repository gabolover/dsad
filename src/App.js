import "./App.css";
import Nav from "./components/Nav/Nav";
import ButtonsBar from "./components/ButtonsBar/ButtonsBar";
import Card from "./components/Card/Card";
import TaskColumn from "./components/TaskColum/TaskColumn";
import ApplicationSidebar from "./components/ApplicationSidebar/ApplicationSidebar";
import TaskColumnContainer from "./components/TaskColumnContainer/TaskColumnContainer";
import GET_USERS from "./graphql/getUsers";
import { useQuery, gql } from "@apollo/client";
import moment from "moment";
import TaskBar from "./components/TaskBar/TaskBar";
export const nowDate = moment();

/* import { client } from "./client";
console.log(client);
 */

function App() {
  const { data, error, loading } = useQuery(GET_USERS);
  if (loading) return <p>loading</p>;
  if (error) return <p>error... {error.message}</p>;
  return (
    <div className="App">
      <ApplicationSidebar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <Nav />
      <ButtonsBar />
      <TaskColumnContainer />
    </div>
  );
}

export default App;
