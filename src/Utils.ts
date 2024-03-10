// import { TodoType } from "./App"
// export const saveTodos = (Todo:TodoType[]) => {
//  localStorage.setItem("mytodos",JSON.stringify(Todo));
// }

import { TodoType } from "./App";

// export const getTodos = ():TodoType[] => {
//     const Tod = localStorage.getItem("mytodos");
//     return(Tod ? JSON.parse(Tod):[]);
// }

export const saveTodos = (Todo:TodoType[]) => {
localStorage.setItem("myTodo",JSON.stringify(Todo));
}

export const getTodos = ():TodoType[] => {
    const tod = localStorage.getItem("myTodo");
   return( tod ? JSON.parse(tod):[]);
}





