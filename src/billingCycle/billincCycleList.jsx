import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleAction'
export class billincCycleList extends Component {

    componentWillMount() {
        this.props.getList()
        console.log(this.props.list)
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(e => (
            <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.month}</td>
                <td>{e.year}</td>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(billincCycleList)