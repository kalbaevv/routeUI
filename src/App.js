import Header from "./features/header/Header";
import List from "./features/list/List";
import {useState} from "react";

function App() {
    const [isList, setIsList] = useState(false);
  return (
    <div style={{ padding: "20px" }}>
        <Header setIsList={setIsList} isList={isList}/>
        {isList ? <List />:""}
    </div>
  );
}

export default App;
