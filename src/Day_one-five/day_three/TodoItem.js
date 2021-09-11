import React from "react";

function TodoItem({ id, item, onCheck }) {
  return (
    <>
      <li
        onClick={() => {
          onCheck(id);
        }}
      >
        {item}
      </li>
    </>
  );
}

export default TodoItem;

// import React from "react";
// import styled from "styled-components";

// const TodoItem = ({ id, item, onCheck }) => {
//   return (
//     <Maindiv>
//       <li
//         onClick={() => {
//           onCheck(id);
//         }}
//       >
//         {item}
//       </li>
//     </Maindiv>
//   );
// };

// export default TodoItem;

// const Maindiv = styled.div``;
