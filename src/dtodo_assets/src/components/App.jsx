import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Textbox from "./Textbox";
import Todolist from "./Todolist";
import { dtodo } from "../../../declarations/dtodo";

function App() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData(){                           //retrieving data from canister
    const dlistArray = await dtodo.readList();
    setList(dlistArray);
  }

  function addItem(item){
    setList(prevList => {
      dtodo.addListItem(item)                           //adding item to the list in canister
      return [item, ...prevList]
    });
  }

  function deleteItem(id){
    dtodo.removeListItem(id);                           //deleting item from list in canister

    setList(prevList =>{
      return [...prevList.filter((item, index)=>{
        return index !== id;
      })
    ]
    });
  }

  return (
    <div className="App">
      <Navbar/>
      <Textbox addItem={addItem}/>
      <Todolist list={list} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
