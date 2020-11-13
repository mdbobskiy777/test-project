import {userAPI as usersAPI} from "../api/api";

const SET_CHARTS_DATA = "charts-reducer/SET_CHARTS_DATA"

let initialState = {
    chartsData:null
}
const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARTS_DATA:
            return {...state, chartsData: action.data}
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
    return {labels:[...labels], clicks:[...clicks],page_views:[...page_views]}
}

const setChartData = (data) => ({type: SET_CHARTS_DATA, data})

export const getUserData = () => async dispatch => {
    let userData = await usersAPI.getUser()
    let mappedData =  mapData(userData)
    dispatch(setChartData(mappedData));
}
export default chartsReducer