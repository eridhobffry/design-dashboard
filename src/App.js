import React, { Component } from 'react'
import "./assets/css/style.css"

import AdminLayout from "./pages/layout/admin/component"
import Dashboard from "./pages/section/dashboard/component"

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <AdminLayout/>
        <Dashboard/>
      </>
    )
  }
}

export default App

