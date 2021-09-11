import React, { useState } from "react";
import TodoItem from "./TodoItem";

import styled from "styled-components";

function App() {
  /**update every char on input */
  const [input, setInput] = useState("");

  /**store every items in array
   * by default it's empty array
   */
  const [items, setItems] = useState([]);

  function addItem(event) {
    setItems((prevData) => {
      /*set final value of input after onckick button
      and set as per it's css and js at "TodoItem"*/
      return [...prevData, input];
    });

    setInput("");
  }

  /**removing item */
  function removeItem(id) {
    setItems((prevData) => {
      return prevData.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Maindiv>
      <HeaDing>
        <span>3 TodoList</span>
      </HeaDing>

      <TodoList>
        <Heading>
          <h1 className="title">To-Do List</h1>
        </Heading>

        <AnotherDiv>
          <input
            placeholder="Write Here"
            type="text"
            value={input}
            // target each char ⬇️
            /*event is parameter passed to pass setInput (new written value)
            into value={input} where input is final value*/
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <button onClick={addItem}>Add Todo</button>
          <span>Click on item to Delete it</span>
        </AnotherDiv>

        <Items>
          <ul>
            {/* set each TODo Item in unordered list
             * render TodoItem component which allows to remove  something

             */}

            {items.map((item, index) => (
              <TodoItem
                // key={index}
                /**id, item and onCheck(params multiple params in {}) 
                is passed on another component TodoItem
                 value : parameter
                 item : item (rightside params passed near map)
                 */
                onCheck={removeItem}
                /**these two for getting value from input ⬇️*/
                id={index}
                item={item}
              />
            ))}
          </ul>
        </Items>
      </TodoList>
      <Links>
        <span> Here is my another Todo List project Link 👇️ </span>
        <a href="https://keep-notes-dc2ee.web.app/" target="_blank">
          https://keep-notes-dc2ee.web.app/
        </a>
      </Links>
    </Maindiv>
  );
}

export default App;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 10px;
  padding: 4px;
`;

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 10px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`;
const HeaDing = styled.div`
  background-color: rgba(20, 19, 37, 0.95);
  margin: 4px 4px 10px 4px;
  padding: 4px;
  border-radius: 8px;

  span {
    font-size: 36px;
    font-weight: 500;
    line-height: 2;
    color: white;
  }
`;

const TodoList = styled.div`
  padding: 16px;
  max-height: 460px;
  height: 460px;
  width: 300px;

  background-color: rgb(246, 246, 246);

  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 40px 40px;
  border-radius: 12px;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.64);

  input {
    border: 0;
    border-bottom: 2px solid black;
    border-radius: 4px;
    background-color: transparent;
    font-family: "Architects Daughter", sans-serif;
    font-size: 24px;
    padding: 10px 15px;
    width: 70%;
    color: black;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    outline: none;

    ::placeholder {
      color: rgb(51, 51, 51);
      font-weight: 400;
    }
  }

  button {
    margin-top: 30px;
    border: none;
    border-radius: 4px;
    padding: 8px 40px;
    font-family: "Architects Daughter", sans-serif;
    font-size: 18px;
    font-weight: 600;
    user-select: none;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.64);

    :active {
      background-color: black;
      color: white;
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64) inset;
      -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64) inset;
      -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64) inset;
    }
  }

  form {
    margin-top: 40px;
  }
`;

const AnotherDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 16px;
    margin-top: 10px;
    font-weight: 500;
    color: blue;
    border-bottom: 2px solid black;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    width: 60%;
    margin-top: 30px;

    border-radius: 10px;

    padding: 0.2rem 1.2rem;
    color: black;
  }
`;

const Items = styled.div`
  margin-top: 20px;
  border-radius: 4px;

  ul li {
    width: fit-content;
    margin: 10px 10px 10px 0px;

    cursor: pointer;
    background-color: white;
    color: black;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);

    text-align: left;

    font-size: 24px;
    font-weight: 500;
    padding: 6px;
    border-radius: 4px;

    -webkit-tap-highlight-color: transparent;

    :active {
      background-color: red;
    }

    :hover {
      background-color: red;
    }
  }

  max-height: 200px;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #888;
    background-color: black;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
