import React from "react";
import Sidebar from "react-sidebar";
import styled from "styled-components";
import DashboardPage from "./Dashboard"

import Dashboard from "../assets/img/Dashboard.png";
import Chat from "../assets/img/Chat.png";
import Cog from "../assets/img/Cog.png";
import Folder from "../assets/img/Folder.png";
import Message from "../assets/img/Message.png";

 
class SideBar extends React.Component {
  
 
  render() {
    return (
        <>
         <div class="sidenav">
        <a href="#about">
        <Image src={Dashboard} alt="..." />
        </a>
        <a href="#services">
        <Image src={Chat} alt="..." />
        </a>
        <a href="#clients">
        <Image src={Folder} alt="..." />
        </a>
        <a href="#contact">
        <Image src={Message} alt="..." />
        </a>
        <a href="#contact">
        <Image src={Cog} alt="..." />
        </a>
      </div>
      
        </>
       
    );
  }
}
 
export default SideBar;

const Image = styled.img`
  height: 21px;
  width: 23px;
  margin: auto 0;
`;