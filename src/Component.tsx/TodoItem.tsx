// import { useState } from "react";
// import { TodoType } from "../App";
// type PropsType = {
//     todos:TodoType,
//     DeleteHandler:(id: TodoType["id"]) => void,
//     CompleteHandler:(id: TodoType["id"]) => void
//     editHandler:(id: TodoType["id"], newTitle: TodoType["title"]) => void
// }

// const TodoItem = ({todos,DeleteHandler,CompleteHandler,editHandler}:PropsType) => {

// const[editActive, setEditActive] = useState<boolean>(false);

// const[textVal, setTextVal] = useState<string>(todos.title);

// return(
// <div>
//     <input type="checkbox" name="" id=""  checked={todos.isComplete} onChange={()=>{
//         CompleteHandler(todos.id);
//     }}/>
//      {editActive ? (
//      <input type="text"
//       value={textVal}
//       onChange={(e)=>{
//         setTextVal(e.target.value);

//       }}
//       onKeyDown={(e)=>{
//         if( e.key === "click" && textVal != "")
//         {
//             editHandler(todos.id,textVal);
//             setEditActive(false);
//         }
//       }}

//      />):
//      (<input type="text" value={textVal}readOnly/>)
// }
//     <button onClick={()=>DeleteHandler(todos.id)}>X</button>
//     <button onClick={()=>(
//         setEditActive((prev) => !prev)
//  ) }
//     >{editActive ? "Save" :"Edit" }</button>
// </div>
// )
// }
// export default TodoItem;
import { useState } from "react";
import { TodoType } from "../App";
type PropsType = {
  todo: TodoType;
  CompleteHandler: (id: TodoType["id"]) => void;
  DeleteHandler: (id: TodoType["id"]) => void;
  editHandler: (id: TodoType["id"], newTitle: TodoType["title"]) => void;
};

const TodoItem = ({
  todo,
  CompleteHandler,
  DeleteHandler,
  editHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<TodoType["title"]>(todo.title);

  return (
    <div className=" block bg-red-200 mt-2 overflow-hidden hover:bg-red-300 te ">
      <div className='overflow-auto'>
      <input
        type="checkbox"
        className="bg-transparent w-10"
        name=""
        id=""
        checked={todo.isCompleted}
        onChange={() => {
          CompleteHandler(todo.id);
        }}
      />

      {editActive ? (
        <input
          type="text"
          className="text-lg bg-transparent"
          value={textVal}
          onChange={(e) =>{
            e.preventDefault();
            setTextVal(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && textVal !== "") {
              editHandler(todo.id, textVal);
               setEditActive(false);
            }
            
          }}
        />
      ) : (
        <input type="text"  className=" bg-transparent"value={textVal} readOnly />
      )}
      <button
        onClick={() => {
          DeleteHandler(todo.id);
        }}
        className="mx-1 bg-red-400 shadow-md px-3 hover:bg-red-800"
      >
        X
      </button>
      <button
        onClick={() => {
          setEditActive((prev) => !prev);
          editHandler(todo.id, textVal);
          
        }}
        disabled ={ textVal === ''}
        className="mx-1 bg-sky-600 px-2  hover:bg-sky-800"
      >
        {editActive ? "Save" : "Edit"}
      </button>
      </div>
    </div>
  );
};
export default TodoItem;
