import React from 'react'
import {Pagination} from "../../styles/fragment/pagination/component"

const PaginationTabs = ({item}) => {
    return (
        <>
            <Pagination>
            <button href="#" class="active">1</button>
            <button href="#">2</button>
          </Pagination>
        </>
    )
}

export default PaginationTabs