import React, {Suspense} from "react"
import Header from "./components/Header/Header"
import MainPage from "./components/MainPage/MainPage"
import Footer from "./components/Footer/Footer"
import {Switch} from "react-router"
import {Route} from "react-router"
import UsersStatisticContainer from "./components/UsersStatistic/UsersStatisticContainer"
import NavigationComponent from "./components/NavigationComponent/NavigationComponent"
import s from "./app.module.scss"

const UserPageContainer = React.lazy(() => import("./components/UserPage/UserPageContainer"))

function App() {
    return (
        <div className={s.content}>
            <Suspense fallback={<div>loading...</div>}>
                <Header/>
                <Switch>
                    <Route exact path={"/"} render={() => <MainPage/>
                    }/>
                    <Route path={"/mainPage"} render={() => <MainPage/>}/>
                    <Route path={"/userStatistic"} render={() => <div>
                        <NavigationComponent/>
                        <UsersStatisticContainer/>
                    </div>}/>
                    <Route path={"/user/:id?"} render={() => <div>
                        <NavigationComponent/>
                        <UserPageContainer/>
                    </div>}/>
                    <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
                <Footer/>
            </Suspense>
        </div>
    )
}

export default App;
