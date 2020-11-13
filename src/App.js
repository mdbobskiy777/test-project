import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import {Switch} from "react-router";
import {Route} from "react-router";
import UsersStatisticContainer from "./components/UsersStatictic/UsersStatisticContainer";
import UserPageContainer from "./components/UserPage/UserPageContainer";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={"/"} render={() => <MainPage/>
                }/>
                <Route path={"/mainPage"} render={() => <MainPage/>}/>
                <Route path={"/userStatistic"} render={() => <UsersStatisticContainer/>}/>
                <Route path={"/user/:id?"} render={() => <UserPageContainer/>}/>
                <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
