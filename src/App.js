import Header from "./features/header/Header";
import List from "./features/list/List";
import {useState} from "react";
import CreateRoute from "./components/createRoute/CreateRoute";

function App() {
    const [isList, setIsList] = useState(false);
  return (
    <div style={{ padding: "20px" }}>
        <Header setIsList={setIsList} isList={isList}/>
        {isList ? <List />:""}
        <CreateRoute/>
    </div>
  );
}

export default App;
