import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { reducer as toastReducer } from 'react-redux-toastr'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCyclerReducer from "../billingCycle/billingCyclerReducer";
import AuthReducer from "../auth/authReducer";
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclerReducer,
    form: formReducer,
    toastr: toastReducer,
    auth:AuthReducer
})

export default rootReducer