import { combineReducers } from "redux";
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCyclerReducer from "../billingCycle/billingCyclerReducer";
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclerReducer
})

export default rootReducer