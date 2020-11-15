import React, {useEffect, useState} from "react"
import ChartComponent from "./ChartComponent";
import s from "./userPage.module.css"

const UserPage = (props) => {
    const [first, setFirst] = useState(props.chartsData.labels[0])
    const [last, setLast] = useState(props.chartsData.labels
        [props.chartsData.labels.length - 1])

    const [dates, setDates] = useState(props.totalDates)

    useEffect(() => {
        setFirst(props.chartsData.labels[0])
        setLast(props.chartsData.labels[props.chartsData.labels.length - 1])
    }, [props.chartsData.labels])

    const [chooseMode, setChooseMode] = useState(false)
    const onInputChange = () => {
    }
    const getDates = (dates, setDate) => {
        return dates.map(e => {
            return <li onClick={() => {
                setDate(e)
            }} role="presentation"><a role="menuitem" tabIndex="-1">{e}</a></li>
        })
    }
    const createDropDown = (label, dates) => {
        return <span className="dropdown">
            <button className="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown" aria-expanded="true">
                {label}
                <span className="caret"/>
            </button>
            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                {(label.indexOf("from") !== -1) ? getDates(dates, setFirst) :
                    getDates(dates, setLast)}
            </ul>
        </span>
    }
    debugger
    return <div>
        <div><h1>{props.fullName}</h1></div>
        <div className={s.chooseItem}>
            {(chooseMode) ?
                <div onChange={onInputChange}>
                    {createDropDown("from " + first, dates)}
                    {createDropDown("to " + last, dates)}
                    <button onClick={() => {
                        setChooseMode(false)
                        debugger
                        props.getUserData(props.match.params.id, first, last)
                    }} className="btn btn-warning">close
                    </button>
                </div>
                : <div onDoubleClick={() => {
                    setChooseMode(true)
                }}>Statistics from {first} to {last}</div>
            }
        </div>
        <ChartComponent labels={props.chartsData.labels}
                        data={props.chartsData.clicks}
                        label={"clicks"}/>
        <ChartComponent labels={props.chartsData.labels}
                        data={props.chartsData.page_views}
                        label={"views"}
        />
    </div>
}

export default UserPage