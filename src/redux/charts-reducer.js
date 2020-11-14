import {userAPI as usersAPI} from "../api/api";

const SET_CHARTS_DATA = "charts-reducer/SET_CHARTS_DATA"
const SET_FULL_NAME = "charts-reducer/SET_FULL_NAME"
const CLEAR_STORE = "charts-reducer/CLEAR_STORE"

let initialState = {
    chartsData: null,
    fullName: ""
}
const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARTS_DATA:
            return {...state, chartsData: action.data}
        case SET_FULL_NAME:
            return {...state, fullName: action.fullName}
            case CLEAR_STORE:
            return {...state, ...initialState}
        default:
            return state;
    }
}

let mapData = (chartData) => {
    let labels = chartData.map(el => {
        return el.date
    })
    console.log(labels)
    let page_views = chartData.map(el => {
        return el.page_views
    })
    let clicks = chartData.map(el => {
        return el.clicks
    })
    return {labels: [...labels], clicks: [...clicks], page_views: [...page_views]}
}

const setChartData = (data) => ({type: SET_CHARTS_DATA, data})
const setFullName = (fullName) => ({type: SET_FULL_NAME, fullName})
export const clearStore = () => ({type: CLEAR_STORE})

export const getUserData = (userId) => async dispatch => {
    let userData = await usersAPI.getUser(userId)
    let mappedData = mapData(userData.user)
    dispatch(setChartData(mappedData))
    dispatch(setFullName(userData.fullName))
}
export default chartsReducer