import React from "react";
import { Layout, Menu, theme, Input, Card, Progress,Space, Col, Row, Statistic  } from "antd";
import {
  DashboardOutlined,
  NotificationOutlined,
  SearchOutlined,
  FileSearchOutlined,
  MessageOutlined,
  BarChartOutlined,
  BellOutlined,
  LogoutOutlined,
  ArrowDownOutlined,
   ArrowUpOutlined,
   
} from "@ant-design/icons";
import zlogo from "../../images/zeddlogo.jpg";
import "../dashboard/dashboad.css";

const { Search } = Input;
const { Header, Content, Sider } = Layout;

function Dashboard() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleLogout = () => {
    window.location.href = "/"; 
  };
  const menuItems = [
    { label: "Dashboard", icon: <DashboardOutlined /> },
    { label: "Search Jobs", icon: <SearchOutlined /> },
    { label: "Applications", icon: <FileSearchOutlined /> },
    { label: "Message", icon: <MessageOutlined /> },
    { label: "Statatics", icon: <BarChartOutlined /> },
    { label: "News", icon: <BellOutlined /> },
    { label: "Logout", icon: <LogoutOutlined />, onClick: handleLogout }
  ];
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="sidebar-items">
            <div className="c-logo">
              <span>
                <img src={zlogo} alt="Zedd Labz Logo" className="logo-image" />
              </span>
              <span>
                <h1 className="logo-text">Zedd Labz</h1>
              </span>
            </div>
          </div>
          <Menu
            className="menu-items"
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={["1"]}
          >
            {menuItems.map((item, index) => (
              <Menu.Item
                key={index + 1}
                icon={item.icon}
                className="custom-menu-item"
                onClick={item.onClick}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className="header-conatiner">
            <h1 className="Dashboard-text">DASHBOARD</h1>
            <Search
              className="search-input"
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
            <span>
              <NotificationOutlined className="notification-icon" />{" "}
              <span>
                <MessageOutlined className="message-icon" />
              </span>
            </span>
            <h2>Welcome Back</h2>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 500,
                background: colorBgContainer,
              }}
            >
              <div className="card-container">
                <Card
                  className="card-1"
                  style={{
                    width: 400,
                  }}
                >
                  <h1>Interview's Schedule</h1>
                  <h3>86</h3>
                </Card>
                <Card
                  className="card-2"
                  style={{
                    width: 400,
                  }}
                >
                  <h1>Application's Sent</h1>
                  <h3>55</h3>
                </Card>
                <Card
                  className="card-3"
                  style={{
                    width: 400,
                  }}
                >
                  <h1>Profile View</h1>
                  <h3>45,876</h3>
                </Card>
              </div>
              <div className="contanent-conainer">
  <Row gutter={16}>
    <Col span={7}>
      <div className="container-sidebar">
        <div className="progress-container">
          <Progress
            strokeLinecap="butt"
            type="circle"
            percent={75}
            width={100} 
            strokeWidth={8} 
            format={() => (
              <img
                src={zlogo}
                alt="Zedd Labz Logo"
                className="container-sidebar-image"
              />
            )}
          />
        </div>
        <h3 className="Programmer-text">Programmer</h3>
        <h2 className="Report-text">Report in Progress</h2>
        <Space wrap className="main-circle">
          <Progress className="p-circle" type="circle" percent={30} size={80} />
          <Progress
            className="p-circle"
            type="circle"
            percent={70}
            size={80}
            status="exception"
          />
          <Progress className="p-circle" type="circle" percent={100} size={80} />
        </Space>
      </div>
    </Col>
    <Col span={17}>
      <div className="right-side-content">
        <Row gutter={16} >
          <Col span={12} >
            <Card className="bordered-row">
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="bordered-row">
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card className="bordered-row">
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="bordered-row">
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card className="bordered-row">
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="bordered-row">
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card className="bordered-row">
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="bordered-row">
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
</div>


            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
