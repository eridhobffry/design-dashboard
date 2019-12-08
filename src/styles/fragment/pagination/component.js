import styled from "styled-components";

export const Pagination = styled.div`

    padding-left: 20px;
    display: inline-block;
    border-radius: 10px

    button {
        color: black
        float: left
        cursor: pointer
        padding: 8px 16px
        text-decoration: none
        transition: background-color .3s
        border: 1px solid #ddd
        margin: 0 4px
        border-radius: 3px;

            &:hover:not(.active) {
                background-color: #ddd
            }

            &.active {
                background-color: rgb(0, 119, 255);
                color: white
                border: 1px solid rgb(0, 119, 255);
            }

    }

`;