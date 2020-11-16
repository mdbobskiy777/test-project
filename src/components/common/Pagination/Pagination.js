import React, {useState} from 'react'
import s from "./pagination.module.css"
import {fillArrayWithNumbers} from "helpers"

let Pagination = ({paginationStyle, totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
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
        {portionNumber > 1 && <input type={"image"} src={paginationStyle.img} style={{
            transform: paginationStyle.transform
        }} onClick={() => {
            setPortionNumber(portionNumber - 1)
            onPageChanged(setCurrentElementInPortion(portionNumber - 1))
        }}/>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
            .map((p, i) => {
                return <span style={{
                    background: 'paginationStyle.background',
                    borderRadius: paginationStyle.borderRadius
                }} key={i}
                             className={s.pagesItems + " " + ((currentPage === p) && s.selectedPage).toString()}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        {portionNumber < portionCount && <input type={"image"} src={paginationStyle.img} onClick={() => {
            setPortionNumber(portionNumber + 1)
            onPageChanged(setCurrentElementInPortion(portionNumber + 1))
        }}/>}
    </div>
}

export default Pagination;