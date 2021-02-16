import React from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const StyledSideNav = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;

  #sideNav {
    width: 20%;
    height: 100%;
    background-color: #f0c594;
    color: #ffffff;

    .sideNavMenu {
      cursor: pointer;
      margin-top: 20px;
      font-weight: bold;
      font-size: 16px;
    }
  }

  #content {
    width: 80%;
    height: 100%;
    .main-content {
      padding-top: 20px;
    }
  }
`;

export interface Menu {
  path: string;
  exact?: boolean;
  label: string;
  component: () => JSX.Element;
}

export interface SideNavProps {
  menus: Menu[];
  children?: JSX.Element[] | JSX.Element;
}

export const SideNav = ({ menus, children }: SideNavProps) => {
  return (
    <Router>
      <StyledSideNav className="SideNav">
        <div id={"sideNav"}>
          <Link to="/">
            <img
              src={
                "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/57799297_796701334056646_1290189797553340416_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=8n3E1hwz2GAAX8dwaHC&tp=1&oh=d777fe96545291e947f43688df206eb5&oe=60535C8E"
              }
            />
          </Link>
          {menus.map((menu: Menu, idx: number) => {
            const { path, label } = menu;
            return (
              <div key={idx} className={"sideNavMenu"}>
                <Link to={path}>{label}</Link>
              </div>
            );
          })}
        </div>
        <div id={"content"}>
          {children}
          <Switch>
            {/*<Route exact path="/">*/}
            {/*  <Redirect to={menus[0].path} />*/}
            {/*</Route>*/}
            {menus.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
          </Switch>
        </div>
      </StyledSideNav>
    </Router>
  );
};

SideNav.defaultProps = {};
