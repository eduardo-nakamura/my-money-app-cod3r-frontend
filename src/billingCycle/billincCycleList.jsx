import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleAction'
import CustomButton from '../common/form/CustomButton'
export class billincCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(e => (
            <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.month}</td>
                <td>{e.year}</td>
                <td>
                    <CustomButton btnType='button' btnClass="warning" onClick={() => this.props.showUpdate(e)}>
                        <i className="fa fa-pencil"></i>
                    </CustomButton>
                       <CustomButton btnType='button' btnClass="danger" onClick={() => this.props.showDelete(e)}>
                        <i className="fa fa-trash-o"></i>
                    </CustomButton>
                    {/* <button className="btn btn-warning" onClick={() => this.props.showUpdate(e)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(e)}>
                        <i className="fa fa-trash-o"></i>
                    </button> */}
                </td>
            </tr>
        ))
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(billincCycleList)