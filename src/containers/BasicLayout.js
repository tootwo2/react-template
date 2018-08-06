import React, { Component, Fragment } from "react";
import { Layout, Icon } from "antd";
import { Route, Switch } from "react-router-dom";
import SiderMenu from "../components/SiderMenu";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import Exception from "../components/Exception";
import Success from "./Success";
import Error from "./Error";
import menuData from "../common/menu";
import logo from "./logo.svg";

const { Content, Header, Footer } = Layout;

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <h2>Welcome!</h2>
  },
  {
    path: "/success",
    component: () => <Success />
  },
  {
    path: "/fail",
    component: () => <Error />
  },
  {
    path: "/403",
    component: () => (
      <Exception type="403" style={{ minHeight: 500, height: "80%" }} />
    )
  },
  {
    path: "/404",
    component: () => (
      <Exception type="404" style={{ minHeight: 500, height: "80%" }} />
    )
  },
  {
    path: "/500",
    component: () => (
      <Exception type="500" style={{ minHeight: 500, height: "80%" }} />
    )
  }
];

export default class BasicLayout extends Component {
  state = {
    collapsed: true
  };
  render() {
    return (
      <Layout>
        <SiderMenu
          logo={logo}
          menuData={menuData}
          collapsed={this.state.collapsed}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              collapsed={this.state.collapsed}
              onCollapse={collapsed => this.setState({ collapsed })}
            />
          </Header>
          <Content style={{ margin: "24px 24px 0", height: "100%" }}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
              <Route exact path="/" render={() => <div>hh</div>} />

              <Route
                render={() => (
                  <Exception
                    type="404"
                    style={{ minHeight: 500, height: "80%" }}
                  />
                )}
              />
            </Switch>
          </Content>
          <Footer style={{ padding: 0 }}>
            <GlobalFooter
              links={[
                {
                  key: "github",
                  title: <Icon type="github" />,
                  href: "https://github.com/ant-design/ant-design-pro",
                  blankTarget: true
                }
              ]}
              copyright={
                <Fragment>
                  Copyright <Icon type="copyright" /> 2018 roc_tootwo出品
                </Fragment>
              }
            />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
