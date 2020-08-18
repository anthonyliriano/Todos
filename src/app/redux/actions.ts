export enum ActionTypes {
    Add = 'Add Todo',
    Remove = 'Remove Todo',
    Update = 'Update Todo'

}

export const AddTodo = payload => {
    return {
        type : ActionTypes.Add,
        payload
    }
};

export const UpdateTodo = payload => {
    return {
        type : ActionTypes.Update,
        payload
    }
};

export const RemoveTodo = payload => {
    return {
        type : ActionTypes.Remove,
        payload
    }
};
