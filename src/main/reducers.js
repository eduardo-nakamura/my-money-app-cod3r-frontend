import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { reducer as toastReducer } from 'react-redux-toastr'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCyclerReducer from "../billingCycle/billingCyclerReducer";
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclerReducer,
    form: formReducer,
    toastr: toastReducer
})

export default rootReducer