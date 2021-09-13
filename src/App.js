import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    if (inputList !== "") {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return id !== index;
      });
    });
    console.log(Items);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDO List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <br />
          <ol>
            {Items.map((Itemval, index) => {
              return (
                <div className="todo_style" key={index}>
                  <i
                    className="fa fa-times"
                    onClick={deleteItems.bind(this, index)}
                  ></i>
                  <li>{Itemval} </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
