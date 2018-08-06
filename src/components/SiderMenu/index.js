import React, { PureComponent } from "react";
import styles from "./index.module.less";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends PureComponent {
  getSubMenuOrItem = item => {
    return (
      <SubMenu
        key={item.path}
        title={
          <span>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </span>
        }
      >
        {item.children.map(child => (
          <Menu.Item key={child.path}>
            <Link to={`/${child.path}`}>{child.name}</Link>
          </Menu.Item>
        ))}
      </SubMenu>
    );
  };
  getNavMenuItems = menusData => {
    return menusData.filter(item => item.name && !item.hideInMenu).map(item => {
      // make dom
      const ItemDom = this.getSubMenuOrItem(item);
      return ItemDom;
    });
  };

  render() {
    const { collapsed, logo, menuData } = this.props;

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        width={256}
        className={styles.sider}
      >
        <div className={styles.logo} key="logo">
          <a href="/">
            <img src={logo} alt="logo" />
            <h1>Ant Design Pro</h1>
          </a>
        </div>
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          onOpenChange={this.handleOpenChange}
          selectedKeys={["1"]}
          style={{ padding: "16px 0", width: "100%" }}
        >
          {this.getNavMenuItems(menuData)}
        </Menu>
      </Sider>
    );
  }
}
