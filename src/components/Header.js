import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu,Container } from 'semantic-ui-react'
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Container>
        <Menu >
          {/* <Menu.Item as='a' header>
           SAAED
         </Menu.Item> */}
          {/* <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item> */}
          <Menu.Item>
            <Link to="/startProcess/list">Process</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/tasklist">Tasks</Link>
          </Menu.Item>
        </Menu>
        </Container>
      </div>
    )
  }
}
