import React, { useState } from "react";
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
import TaskRowContainer from "./components/TaskRowContainer/TaskRowContainer";
export const nowDate = moment();

/* import { client } from "./client";
console.log(client);
 */

function App() {
  const [view, setView] = useState(true);
  const { data, error, loading } = useQuery(GET_USERS);
  if (loading) return <p>loading</p>;
  if (error) return <p>error... {error.message}</p>;

  return (
    <div className="App">
      <ApplicationSidebar view={view} setView={setView} />
      <Main view={view} setView={setView} />
    </div>
  );
}

function Main({ view, setView }) {
  return (
    <div className="main">
      <Nav />
      <ButtonsBar view={view} setView={setView} />

      {view ? <TaskColumnContainer /> : <TaskRowContainer />}
    </div>
  );
}

export default App;
