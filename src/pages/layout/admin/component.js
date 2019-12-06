import React, { Component } from 'react'
import Navbar from "../../../components/Navbar"
import Sidebar from "../../../components/Sidebar"

import GlobalStyle from '../../../styles/Global';
import "../../../assets/css/style.css"

class AdminLayout extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <Sidebar/>
        <GlobalStyle />
      </>
    )
  }
}

export default AdminLayout