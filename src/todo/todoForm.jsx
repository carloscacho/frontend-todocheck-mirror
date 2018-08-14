import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../main/redux/actions/todoActions'

const TodoForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.searchTask() : props.addTask()
        } else if (e.key === 'Escape') {
            props.clearTask()
        }
    }
    
    return (
        <div>
            <div role='form' className='todoForm'>
                <div className='row'>
                    <Grid cols='12 9 10 10'>
    
                        <input id='descricao' className='form-control' type="text"
                            placeholder='Adicione Uma tarefa'
                            value={props.description}
                            onKeyUp={keyHandler}
                            onChange={props.changeDescription}
                        />
    
                    </Grid>
                    <Grid cols='12 3 2 2'>
                        <IconButton style='primary' iconName='plus' 
                        onClick={props.addTask} 
                       />
                        <IconButton style='info' iconName='search' 
                        onClick={props.searchTask}
                       />
                     <IconButton style='default' iconName='close' 
                        onClick={props.clearTask}
                       />
                    </Grid>
                </div>
    
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({changeDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)