import React, {useState} from 'react';
import s from "./pagination.module.css";

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let currentPortion = Math.ceil(currentPage/portionSize)
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(currentPortion)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    let setCurrentElementInPortion = portion => {
        return portion * portionSize - (portionSize - 1)
    }

    return <div>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
            onPageChanged(setCurrentElementInPortion(portionNumber - 1))
        }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
            .map((p, i) => {
                return <span key={i}
                             className={s.pagesItems + " " + ((currentPage === p) && s.selectedPage).toString()}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        {portionNumber < portionCount && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
            onPageChanged(setCurrentElementInPortion(portionNumber + 1))
        }}>NEXT</button>}
    </div>
}

export default Pagination;