import React from 'react'



const TableTD = ({item}) => {
    return (
        <>
        <tr>
        <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.time}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.city}</td>
            <td>{item.status}</td>
        </tr>
            
        </>
    )
}

export default TableTD