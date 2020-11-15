import {userAPI as usersAPI} from "../api/api";

const SET_CHARTS_DATA = "charts-reducer/SET_CHARTS_DATA"
const SET_FULL_NAME = "charts-reducer/SET_FULL_NAME"
const SET_TOTAL_DATES = "charts-reducer/SET_TOTAL_DATES"
const CLEAR_STORE = "charts-reducer/CLEAR_STORE"

let initialState = {
    chartsData: null,
    fullName: "",
    totalDates: [
        "2019-10-07",
        "2019-10-08",
        "2019-10-09",
        "2019-10-10",
        "2019-10-11",
        "2019-10-12",
        "2019-10-13",
        "2019-10-14",
        "2019-10-15",
        "2019-10-16",
        "2019-10-17",
        "2019-10-18",
        "2019-10-19",
        "2019-10-20",
        "2019-10-21",
        "2019-10-22",
        "2019-10-23",
        "2019-10-24",
        "2019-10-25",
        "2019-10-26",
        "2019-10-27",
        "2019-10-28",
        "2019-10-29",
        "2019-10-30"
    ]
}
const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARTS_DATA:
            return {...state, chartsData: action.data}
        case SET_FULL_NAME:
            return {...state, fullName: action.fullName}
        case SET_TOTAL_DATES:
            return {...state, totalDates: action.totalDates}
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
const setTotalDates = (totalDates) => ({type: SET_TOTAL_DATES, totalDates})
export const clearStore = () => ({type: CLEAR_STORE})

export const getUserData = (userId, from, to) => async dispatch => {
    let userData = await usersAPI.getUser(userId, from, to)
    let mappedData = mapData(userData.user)
    dispatch(setChartData(mappedData))
    dispatch(setFullName(userData.fullName))
/*
    dispatch(setTotalDates(userData.totalDates))
*/
}
export default chartsReducer