import React, { Component } from 'react'

// redux imports
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear } from '../main/redux/actions/todoActions'

// components imports
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    // shortcut keys for Add, Search, and Clean buttons
    keyHandler(e) {
        const {add, search, description, clear} = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    // when load page, load the search for getting the list
    componentWillMount() {
        this.props.search()
    }

    render() {
        const {add, search, description, clear} = this.props
        return (
            <div>
                <div role='form' className='todoForm'>
                    <div className='row'>
                        <Grid cols='12 9 10 10'>

                            <input id='descricao' className='form-control' type="text"
                                placeholder='Adicione Uma tarefa'
                                value={this.props.description}
                                onKeyUp={this.keyHandler}
                                onChange={this.props.changeDescription}
                            />

                        </Grid>
                        <Grid cols='12 3 2 2'>
                            <IconButton style='primary' iconName='plus'
                                onClick={() => add(description)}
                            />
                            <IconButton style='info' iconName='search'
                                onClick={() => search()}
                            />
                            <IconButton style='default' iconName='close'
                                onClick={() => clear()}
                            />
                        </Grid>
                    </div>

                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)