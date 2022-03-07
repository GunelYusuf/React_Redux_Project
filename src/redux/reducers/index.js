import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import basketReducer from "./basketReducer";
import saveProductReducer from "./saveProductReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    basketReducer,
    saveProductReducer
})


export default rootReducer;