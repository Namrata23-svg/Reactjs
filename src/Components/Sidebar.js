import React, { useState } from 'react';
import { Avatar, Badge, Card, Space } from 'antd';
import image1 from '../assests/image1.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  MailOutlined,
  AppstoreOutlined,
  MessageOutlined,
  BellOutlined,
  SunOutlined,
  UnorderedListOutlined,
  TableOutlined,
  FileOutlined,
  ArrowDownOutlined,
  FileTextOutlined,
  PieChartOutlined,
  BuildOutlined,
  LockOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Row, Col, theme } from 'antd';
import { FaCaretDown } from 'react-icons/fa';
const { Header, Sider, Content } = Layout;

const items = [
  {
    key: 'sub25',
    label: 'Tasks',
    icon: <UnorderedListOutlined/>,
    children: [{ key: '19', label: 'Option 9' }],
  },
  {
    key: 'sub1',
    label: 'Forms',
    icon: <MailOutlined />,
    children: [
      { key: '16', label: 'Form Elements' },
      {
      key: '2', 
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Pro Form Elements
          </span>
          <Button type="primary" size="small" style={{ flexShrink: 0 }}>
            Pro
          </Button>
        </div>
      )
    },
      { key: '3', label: 'Form Layout' },
      {  key: '41', 
        label: (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',color:"white" }}>
              Pro Form Layout
            </span>
            <Button type="primary" size="small" style={{ flexShrink: 0 }}>
              Pro
            </Button>
          </div>
        )},
    ],
  },
  {
    key: 'sub2',
    label: <span style={{ color: 'white' }}>Tables</span>,
    icon: <TableOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: <span style={{ color: 'white' }}>Pages</span>,
    icon: <FileOutlined/>,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  { key: 'support', label: 'Support' },
  { key: 'messages', label: (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <span style={{ display: 'flex',color:"white", alignItems: 'center', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
      <MessageOutlined  style={{ marginRight: 8 }} /> {/* Icon here */}
    Messages
      </span>
      <Button type="primary" size="small" style={{ flexShrink: 0 }}>
        5
      </Button>
      <Button type="primary" size="small" style={{ flexShrink: 0 }}>
        Pro
      </Button>
    </div>
  ),
},
  { key: 'inbox', label: (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <span style={{ display: 'flex', alignItems: 'center', flex: 1,color:"white", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
      <ArrowDownOutlined  style={{ marginRight: 8 }} /> {/* Icon here */}
    Inbox
      </span>
      <Button type="primary" size="small" style={{ flexShrink: 0 }}>
        Pro
      </Button>
    </div>
  ),
},
  { key: 'invoice', 
    label: (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{ display: 'flex', alignItems: 'center', flex: 1, color:"white",overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <FileTextOutlined style={{ marginRight: 8 }} /> {/* Icon here */}
        Invoice
          </span>
          <Button type="primary" size="small" style={{ flexShrink: 0 }}>
            Pro
          </Button>
        </div>
      ),
    },
  { key: 'others', label: 'OTHERS' },
  {
    key: 'sub10',
    label: <span style={{ color: 'white' }}>Charts</span>,
    icon: <PieChartOutlined />,
    children: [{ key: '19', label: 'Option 9' }],
  },
  {
    key: 'sub11',
    label: <span style={{ color: 'white' }}>UI Elements</span>,
    icon: <BuildOutlined />,
    children: [{ key: '22', label: 'UI Elements' }],
  },
  {
    key: 'sub23',
    label: <span style={{ color: 'white' }}>Authentication</span>,
    icon: <LockOutlined />,
    children: [{ key: '23', label: 'Authentication' }],
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: '100vh', position: 'fixed', left: 0 }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[current]}
          selectedKeys={[current]}
          onClick={onClick}
          items={items}
          
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
      <Header
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    background: colorBgContainer,
  }}
>
  
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '50%' }}>
            <SearchOutlined style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input
              type="text"
              placeholder="Type to search..."
              style={{
                width: '100%',
                padding: '8px 8px 8px 32px',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                color: '#333',
              }}
            /></div>
  </div>

  {/* Icons and User Profile */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <SunOutlined />
  <Avatar
        size={45}
        style={{
          backgroundColor: '#f2f1ed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    <Badge dot>
      <BellOutlined style={{ fontSize: '24px', color: '#8c8c8c' }} />
      
    </Badge></Avatar>
    <Avatar
        size={45}
        style={{
          backgroundColor: '#f2f1ed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    <Badge dot>
      <MessageOutlined style={{ fontSize: '24px', color: '#8c8c8c' }} />
    </Badge></Avatar>
    
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Profile Info */}
      <div style={{ marginRight: '8px', textAlign: 'right' }}>
        <div style={{ fontWeight: 'bold',marginTop:"10px" ,marginRight:"-70px"}}>Thomas Anree</div>
        
      </div>
      <div><div style={{ fontSize: '12px', color: '#8c8c8c',marginTop:"40px"}}>UX Designer</div></div>
      {/* Profile Picture */}
      <img
        src="https://via.placeholder.com/40" 
        alt="Profile"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
        }}
      />
      <FaCaretDown/>
    </div>
  </div>
        </Header>
        <Content

        
        >
    
          <h1 style={{marginLeft:"20px"}}>Pro Form Layout</h1>
          <h3 style={{marginLeft:"1098px",marginTop:"-60px"}}>Dashboard/<span style={{ color: 'blue' }}> Pro Dashboard</span> </h3>
          <Row gutter={16}>
            <Col span={12}>
    
              <Space direction="vertical" size={16}>
              <Card
                title="Contact Form 2"
                style={{
                  width: "600px",
                  height:"700px",
                  marginTop:"50px",
                  marginLeft:"30px"
                }}
              >
                <form className="custom-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="Enter your first name" />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="yourmail@gmail.com" />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" placeholder="(321) 5555-0115" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Select Option</label>
                      <div className="radio-group">
                        <label>
                          <input type="radio" name="option" /> Graphics Design
                        </label>
                        <label>
                          <input type="radio" name="option" /> Web Development
                        </label>
                        <label>
                          <input type="radio" name="option" /> Logo Design
                        </label>
                        <label>
                          <input type="radio" name="option" /> Others
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea placeholder="Type your message"></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                  </form>
                </Card>
              </Space>
            </Col>
            <Col span={12}>
              {/* Right Part */}
              <Space direction="vertical" size={16}>
              <Card
                title="Survey Form"
                
                style={{
                  width: "600px",
                  height:"700px",
                  marginTop:"50px",
                  marginLeft:"30px"
                }}
              >
                <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="form-group" style={{marginTop:"10px"}}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email address" />
        </div>
        <div className="form-group" style={{marginTop:"10px"}}>
          <label>Age</label>
          <input type="number" placeholder="Enter your age" style={{ height: "40px", padding: "5px" }} />
        </div>
        <div className="form-group"style={{marginTop:"10px", height: "40px", padding: "5px" }}>
          <label>Which option best describes you?</label>
          <select style={{ height: "50px", padding: "5px" }}>
            <option>Select your subject</option>
            <option>Student</option>
            <option>Professional</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group" style={{marginTop:"40px"}}>
          <label>Would you recommend our site to a friend?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="recommend" /> Yes
            </label>
            <label>
              <input type="radio" name="recommend" /> No
            </label>
            <label>
              <input type="radio" name="recommend" /> Maybe
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Which languages & frameworks you know?</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="languages" /> C
            </label>
            
          </div>
        </div>
    
      </form>
                
              </Card>
              
            </Space>
          </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
