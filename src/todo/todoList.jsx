import React from 'react'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { markAsDone, markAsPending, deleteTask } from '../main/redux/actions/todoActions'

import IconButton from '../template/iconButton'

const TodoList =  props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'checked': ''}>{todo.description}</td>
                <td>

                    <IconButton
                        style='success'
                        iconName='check'
                        onClick={() => props.markAsDone(todo)}
                        hide={todo.done}
                    />
                    
                    <IconButton
                        style='warning'
                        iconName='undo'
                        onClick={() => props.markAsPending(todo)}
                        hide={!todo.done}
                    />

                    <IconButton
                        style='danger'
                        iconName='trash-o'
                        onClick={() => props.deleteTask(todo)}
                        hide={!todo.done}
                    />




                </td>
            </tr>
        ))
    }

    return (
        <table className="table table-striped mt-2">
            <thead className="thead-dark">
                <tr>

                    <th scope="col">Descrição</th>
                    <th scope="col" className='tableActions'>Check</th>

                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({markAsDone, markAsPending, deleteTask}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)