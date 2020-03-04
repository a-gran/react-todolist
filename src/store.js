import {createStore} from "redux"

const initialState = {
  todolists: [
    {"id":0,"title":"sadasdas", "tasks": [{"id":0,"title":"asdasd","isDone":false,"priority":"low"},{"id":1,"title":"asdasda","isDone":false,"priority":"low"},{"id":2,"title":"qweqwe","isDone":false,"priority":"low"} ]},
    {"id":1,"title":"asdasda", tasks: [{"id":0,"title":"2","isDone":false,"priority":"low"},{"id":1,"title":"3","isDone":false,"priority":"low"}]}
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TODOLIST":
      return { ...state, 
        todolists: [...state.todolists, action.newTodolist] 
      }
  }
  return state;
}

const store = createStore(reducer);
export default store;
