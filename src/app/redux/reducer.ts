import { ITodo } from '../todo';
import { ActionTypes } from './actions';

export interface IAppState {
    todos: ITodo[];
    lastUpdate : Date;
}

export const INITIAL_STATE : IAppState = {
    todos : [],
    lastUpdate : null
}

//Transitions your application's state from one state to the next. 
export function todoReducer(state, action) {
    let localStorageKey = "todos";
    switch(action.type) {
        case ActionTypes.Add :
            action.todo.id = Math.floor(Math.random() * 9999999999); ;                
            localStorage.setItem(localStorageKey, JSON.stringify(state.todos.concat(Object.assign({}, action.todo))));
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })
            case ActionTypes.Update :      
                localStorage.setItem(localStorageKey, JSON.stringify(state.todos));
                return Object.assign({}, state, {
                    todos: state.todos,
                    lastUpdate: new Date()
                })
            case ActionTypes.Remove :   
            console.log(state.todos)             
                state.todos = state.todos.filter(a => a.id !== action.todo.id);
                localStorage.setItem(localStorageKey, JSON.stringify(state.todos));
                return Object.assign({}, state, {
                    todos: state.todos,
                    lastUpdate: new Date()
                })                               
        default:
            if(localStorage.getItem(localStorageKey))
                state.todos = JSON.parse(localStorage.getItem(localStorageKey));

            return state;
    }
}




// switch(action.type){
//     case ADD_TODO:
//         action.todo.id = state.todos.length + 1;
//         return Object.assign({}, state, {
//             todos: state.todos.concat(Object.assign({}), action.todo),
//             lastUpdate : new Date()
//         })
//     case TOGGLE_TODO:
//         // let todo = state.todos.find(t => id ==)
//     case REMOVE_TODO:
    

// }
// return state;