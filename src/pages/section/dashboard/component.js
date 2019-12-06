import React, { Component } from 'react'
import Dashboard from "../../../components/Dashboard"

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
        <Dashboard />
      </>
    )
  }
}

export default AdminLayout