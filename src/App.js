import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import ButtonsBar from "./components/ButtonsBar/ButtonsBar";
import ApplicationSidebar from "./components/ApplicationSidebar/ApplicationSidebar";
import TaskColumnContainer from "./components/TaskColumnContainer/TaskColumnContainer";
import { useQuery } from "@apollo/client";
import GET_USERS from "./graphql/getUsers";
import Modal from "./components/Modal/Modal";
import moment from "moment";
import TaskRowContainer from "./components/TaskRowContainer/TaskRowContainer";
export const nowDate = moment();
console.log(nowDate);
/* import { client } from "./client";
console.log(client);
 */

function App() {
  const [view, setView] = useState(true);
  const [modal, setModal] = useState(false);
  const { data, error, loading } = useQuery(GET_USERS);
  if (loading) return <p>loading</p>;
  if (error) return <p>error... {error.message}</p>;
  const users = data.users;

  return (
    <>
      <div className={`App ${modal && "filter"}`}>
        <ApplicationSidebar view={view} setView={setView} />
        <Main view={view} setView={setView} modal={modal} setModal={setModal} />
      </div>
      {modal && <Modal setModal={setModal} users={users} />}
    </>
  );
}

function Main({ view, setView, setModal, modal }) {
  return (
    <div className="main">
      <Nav />
      <ButtonsBar view={view} setView={setView} setModal={setModal} />
      {view ? <TaskColumnContainer /> : <TaskRowContainer />}
    </div>
  );
}

export default App;
