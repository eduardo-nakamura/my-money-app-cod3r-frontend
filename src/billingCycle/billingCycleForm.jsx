import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelInput from '../common/form/labelInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleAction'
import ItemList from './itemList'
import CustomButton from '../common/form/CustomButton'
import Summary from './summary'
export class BillingCycleForm extends Component {

    calculateSummary(){
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
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
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' readOnly={readOnly} list={credits} field='credits' legend="Créditos" />
                    <ItemList cols='12 6' showStatus={true} readOnly={readOnly} list={debts} field='debts' legend="Débitos" />
                </div>

                <div className="box-footer">
                    <CustomButton btnType='submit' btnClass={`${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </CustomButton>
                    <CustomButton btnType='button' btnClass="default" onClick={this.props.init}>
                        Cancelar
                    </CustomButton>

                    {/* <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button> */}
                    {/* <button type="button" className="btn btn-default" onClick={this.props.init}>
                        Cancelar
                    </button> */}
                </div>

            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)