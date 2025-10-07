import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCyclerReducer from "../billingCycle/billingCyclerReducer";
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclerReducer,
    form: formReducer
})

export default rootReducer