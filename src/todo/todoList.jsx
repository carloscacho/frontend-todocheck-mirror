import React from 'react'

import IconButton from '../template/iconButton'
export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'checked': ''}>{todo.description}</td>
                <td>

                    <IconButton
                        style='success'
                        iconName='check'
                        onClick={() => props.check(todo)}
                        hide={todo.done}
                    />
                    
                    <IconButton
                        style='warning'
                        iconName='undo'
                        onClick={() => props.unCheck(todo)}
                        hide={!todo.done}
                    />

                    <IconButton
                        style='danger'
                        iconName='trash-o'
                        onClick={() => props.delete(todo)}
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