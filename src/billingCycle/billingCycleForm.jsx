import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelInput from '../common/form/labelInput'
export class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name='name'
                        label='Nome'
                        cols='12 4'
                        placeholder='Informe o nome'
                        component={labelInput}
                    />

                    <Field
                        name='month'
                        label='Mês'
                        cols='12 4'
                        type='number'
                        placeholder='Informe o mês'
                        component={labelInput}
                    />
                    <Field
                        name='year'
                        label='Ano'
                        cols='12 4'
                        type='number'
                        placeholder='Informe o ano'
                        component={labelInput}
                    />

                </div>
                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'billingCycleForm'
})(BillingCycleForm)