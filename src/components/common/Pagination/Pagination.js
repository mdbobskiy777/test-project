import React, {useState} from 'react'
import s from "./pagination.module.css"
import {fillArrayWithNumbers} from "helpers"
import img from "assets/images/Line 9.png";

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let currentPortion = Math.ceil(currentPage / portionSize)
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = fillArrayWithNumbers(pagesCount)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(currentPortion)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    let setCurrentElementInPortion = portion => {
        return portion * portionSize - (portionSize - 1)
    }

    return <div>
        {portionNumber > 1 && <input className={s.arrow} type={"image"} src={img} style={{
            transform: "rotate(180deg)"
        }} onClick={() => {
            setPortionNumber(portionNumber - 1)
            onPageChanged(setCurrentElementInPortion(portionNumber - 1))
        }}/>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
            .map((p, i) => {
                return <button key={i}
                               className={s.pagesItems + " " + ((currentPage === p) && s.selectedPage).toString()}
                               onClick={(e) => {
                                   onPageChanged(p);
                               }}>{p}</button>
            })}
        {portionNumber < portionCount && <span className={s.arrowContainer}><input className={s.arrow} type={"image"} src={img} onClick={() => {
            setPortionNumber(portionNumber + 1)
            onPageChanged(setCurrentElementInPortion(portionNumber + 1))
        }}/></span>}
    </div>
}

export default Pagination;