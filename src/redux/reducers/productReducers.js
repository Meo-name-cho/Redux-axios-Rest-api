import { ActionTypes } from "../contants/action-types"

const initalState = {
    products: [
        {
        id: 1,
        title: "Dipesh",
        category: 'programer'
    },],
}
export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            break
    }
}