import React from 'react'
import {TextLight} from "../../styles/fragment/table/component"

//Import component building blocks
import ButtonSent from "../button/sent"
import ButtonOpened from "../button/opened"


const TableTD = ({item}) => {
    return (
        <>
        <tr role="row">
            <td role="cell" className="text-deep-grey text-resp-black section-20">
                <TextLight>
                {item.name}
                </TextLight>
                </td>
            <td role="cell" className="text-low-grey text-resp-black">
                <TextLight>
                {item.email}
                </TextLight>
                </td>
            <td role="cell" className="text-low-grey text-resp-black">
            <TextLight>
            {item.time}
                </TextLight>
            </td>
            <td role="cell" className="text-low-grey text-resp-black">
            <TextLight>
            {item.phoneNumber}
                </TextLight>
            </td>
            <td role="cell" className="text-low-grey text-resp-black">
                <TextLight>
                {item.city}
                </TextLight>
                </td>
            <td role="cell">
                {item.status === "sent" ?
                <ButtonSent/>
            :
                <ButtonOpened/>
            }
                
                </td>
        </tr>
            
        </>
    )
}

export default TableTD