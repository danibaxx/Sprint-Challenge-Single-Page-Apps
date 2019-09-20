import React from "react";
import { Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

// const color = 'violet'

// const panes = [
//   {
//     menuItem: 'Home Page',
//     render: () => <Tab.Pane attached={false}><NavLink to='/'>Home Page</NavLink></Tab.Pane>,
//   },
//   {
//     menuItem: 'Characters',
//     render: () => <Tab.Pane attached={false}><NavLink to='/character/'>Characters</NavLink></Tab.Pane>,
//   },
//   {
//     menuItem: 'Locations ',
//     render: () => <Tab.Pane attached={false}><NavLink to='/location/'>Locations</NavLink></Tab.Pane>,
//   },
//   {
//     menuItem: 'Episodes',
//     render: () => <Tab.Pane attached={false}></Tab.Pane>,
//   }
// ]

export default function TabNav() {
  return (
    <CustDiv>
      <Button color='violet'>
        <NavLink to='/'
        activeStyle={{
          color: 'white'
        }}>
          Home Page
        </NavLink>
      </Button>

      <Button color='violet'>
        <NavLink to='/character/'
          activeStyle={{
            color: 'white'
          }}>
          Characters
        </NavLink>
      </Button>
      <Button color='violet'>
        <NavLink to='/location/'
          activeStyle={{
            color: 'white'
          }}>
          Locations
        </NavLink>
      </Button>
      <Button color='violet'>
        <NavLink to='/episode/'
          activeStyle={{
            color: 'white'
          }}>
          Episodes
        </NavLink>
      </Button>
    </CustDiv>
  )
};

const CustDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
