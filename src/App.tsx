// // import { ChangeEvent, useEffect, useState } from "react";
// // import TodoItem from "./Component.tsx/TodoItem";
// // import { getTodos, saveTodos } from "./Utils";
// // export type TodoType = {
// //   title: string;
// //   isComplete: boolean;
// //   id: string;
// // };

// // function App() {
// //   const [todo, setTodo] = useState<TodoType[]>(getTodos());
// //   const [inpuText, setInputText] = useState<TodoType["title"]>("");

// //   const changeHandler = () => {

// //     const newTodo: TodoType = {
// //       title: inpuText,
// //       isComplete: false,
// //       id: String(Math.random() * 1000),
// //     };

// //     setTodo((prev) => [...prev, newTodo]);
// //     setInputText("");
// //   };
// // const CompleteHandler = (id:TodoType["id"]):void => {
// // const newTodo :TodoType[] = todo.map((item)=>{
// //   if(item.id === id) item.isComplete = !item.isComplete;
// //   return item;
// // })
// // setTodo(newTodo)
// // }
// //   const DeleteHandler = (id:TodoType["id"]):void => {
// //     const newTodo :TodoType[] =(todo.filter((item) => item.id !== id))
// //     setTodo(newTodo);

// //   };

// //   const editHandler = (id:TodoType["id"],newTitle:TodoType["title"]):void => {
// //     const newTodo :TodoType[] = todo.map((item)=>{
// //       if(item.id === id) item.title = newTitle;
// //       return item;
// //     })
// //     setTodo(newTodo)
// //     // saveTodos(todo)
// //     }
// //     useEffect(()=>{
// //  saveTodos(todo)
// //     },[todo])

// //   // console.log(todo);
// //   return (
// //     <div>
// //       <h1></h1>
// //       <input
// //         type="text"
// //         onChange={(e: ChangeEvent<HTMLInputElement>) => {
// //           e.preventDefault();
// //           setInputText(e.target.value);
// //         }}
// //         value={inpuText}
// //         onKeyDown={(e)=>{
// //          if(e.key === "Enter" && inpuText != "" )changeHandler();
// //         }}
// //       />

// //       <button disabled ={inpuText ===""} onClick={changeHandler}>Add</button>

// //       {

// //         todo.map((item)=>
// //         <TodoItem
// //         DeleteHandler={DeleteHandler}
// //         CompleteHandler={CompleteHandler}
// //         editHandler ={editHandler}
// //         key ={item.id}
// //        todos = {item}
// //         />
// //         )
// //       }
// //     </div>
// //   );
// // }

// export default App;

import TodoItem from "./Component.tsx/TodoItem";
import { useEffect, useState } from "react";
import { getTodos, saveTodos } from "./Utils";

export type TodoType = {
  title: string;
  isCompleted: boolean;
  id: string;
};

const App = () => {
  const [inpuText, setInputText] = useState<TodoType["title"]>("");
  const [todos, setTodos] = useState<TodoType[]>(getTodos());
  // console.log(todos);
  const submitHandler = () => {
    const newTodos: TodoType = {
      title: inpuText,
      isCompleted: false,
      id: String(Math.random() * 1000),
    };
    setTodos((prev) => [...prev, newTodos]);
    setInputText("");
  };
  const CompleteHandler = (id: TodoType["id"]): void => {
    const newTodo: TodoType[] = todos.map((item) => {
      if (item.id === id) item.isCompleted = !item.isCompleted;
      return item;
    });
    setTodos(newTodo);
  };
  const DeleteHandler = (id: TodoType["id"]): void => {
    const newTodo: TodoType[] = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };
  const editHandler = (id: TodoType["id"], newTitle: TodoType["title"]) => {
    const newTodo: TodoType[] = todos.map((item) => {
      console.log(newTitle);
      
      if (item.id === id) item.title = newTitle;
      return item;
    });
    setTodos(newTodo);
  //  alert(id)
    
  
  };
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <div className=' w-full h-screen flex justify-center bg-emerald-600 items-center overflow-hidden'>
      <div className="flex flex-col  items-center border-slate-950 w-96 h-96 rounded-xl shadow-2xl bg-white overflow-auto p-4">
      <h1 className=' text-lg text-sky font-medium mt-2'>Todos</h1>
    <div>
      <input
        type="text"
        className="mt-1 mb-2  px-3 py-2 w-[220px] bg-white border border-sky-400 rounded-md text-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        onChange={(e) => {
          e.preventDefault();
          setInputText(e.target.value);
        }}
        value={inpuText}
        onKeyDown={(e) => {
          if (e.key === "Enter" && inpuText !== "") submitHandler();
        }}
      />
      <button disabled={inpuText === ""} className="mx-1  mb-2  bg-sky-600 px-4 py-2 rounded hover:bg-sky-800 text-white" onClick={submitHandler}>
        Add
      </button>
      {todos.map((item) => (
        <TodoItem
          CompleteHandler={CompleteHandler}
          DeleteHandler={DeleteHandler}
          editHandler={editHandler}
          key={item.id}
          todo={item}
        />
      ))}
      </div>
    </div>
    </div>
  );
};
export default App;
