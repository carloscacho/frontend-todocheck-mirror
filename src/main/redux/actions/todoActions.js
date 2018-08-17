import axios from 'axios'

const URL = process.env.API_URL ? process.env.API_URL : 'http://localhost:3003/api/todoact'

export const changeDescription = (event) => ({
    type: 'DESCRPTION_CHANGE',
    payload:event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const searchTerm = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createdAt${searchTerm}`)
            .then(response => dispatch({
                type: 'TODO_SEARCHED',
                payload: response.data
            }))
    }
}

export const add = (description) => {
    return dispatch => {
         axios.post(URL, {description})
            .then(resp =>  dispatch(clear()))
            .then(resp =>  dispatch(search()))
    }  
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true} )
        .then(resp =>  dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false} )
        .then(resp =>  dispatch(search()))
    }
}

export const deleteTask = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp =>  dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR'}, search()]
}