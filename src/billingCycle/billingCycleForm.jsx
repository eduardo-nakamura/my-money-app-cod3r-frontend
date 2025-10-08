import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelInput from '../common/form/labelInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleAction'
export class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name='name'
                        label='Nome'
                        cols='12 4'
                        placeholder='Informe o nome'
                        readOnly={readOnly}
                        component={labelInput}
                    />

                    <Field
                        name='month'
                        label='Mês'
                        cols='12 4'
                        type='number'
                        placeholder='Informe o mês'
                        readOnly={readOnly}
                        component={labelInput}
                    />
                    <Field
                        name='year'
                        label='Ano'
                        cols='12 4'
                        type='number'
                        placeholder='Informe o ano'
                        readOnly={readOnly}
                        component={labelInput}
                    />

                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm',destroyOnUnmount: false})(BillingCycleForm)
// const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)