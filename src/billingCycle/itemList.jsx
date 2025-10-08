import React, { Component } from 'react'
import Grid from '../common/layout/grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../common/form/input'
import CustomButton from '../common/form/CustomButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import If from '../common/operator/if'
export class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }


    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input} placeholder='Informe o Nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input} placeholder='Informe o Valor' readOnly={this.props.readOnly} /></td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${this.props.field}[${index}].status`} component={Input} placeholder='Informe o Status' readOnly={this.props.readOnly} /></td>
                </If>
                <td>
                    <CustomButton btnType='button' btnClass="success" onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </CustomButton>
                    <CustomButton btnType='button' btnClass="warning" onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </CustomButton>
                    <CustomButton disabled={list.length === 1} btnType='button' btnClass="danger" onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </CustomButton>
                </td>
            </tr>
        ))

    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)