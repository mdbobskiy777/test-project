import {userAPI as usersAPI} from "api/api"

const SET_USERS_SUCCESS = "statistic-reducer/SET_USERS_SUCCESS"
const SET_TOTAL_USERS_COUNT = 'statistic-reducer/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'statistic-reducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'statistic-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'
const SET_CURRENT_PAGE = 'statistic-reducer/SET_CURRENT_PAGE'
const CLEAR_STORE = 'statistic-reducer/CLEAR_STORE'

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const statisticReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_SUCCESS:
            return {...state, users: action.users}
            case CLEAR_STORE:
            return {...state, ...initialState}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const clearStore = () => ({type: CLEAR_STORE})


const setUsers = (users) => ({type: SET_USERS_SUCCESS, users})

export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.users));
    dispatch(setTotalUsersCount(data.totalUsersCount));
}

export default statisticReducer