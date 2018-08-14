import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livros',
        list: [{
            _id: 1,
            description:'Pagar fatura do Cartão',
            done: true
        }, {
            _id: 2,
            description:'Reunião',
            done: false
        }, {
            _id: 3,
            description:'Consulta Medica',
            done: false
        }]
    })
})

export default rootReducer;