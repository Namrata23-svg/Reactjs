import React, { useState } from 'react';
import { Avatar, Badge, Card, Space } from 'antd';
import { Bar,Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, LineElement,
    PointElement,Legend } from 'chart.js';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { FaCaretDown, FaSignal } from 'react-icons/fa';
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
  QrcodeOutlined,
  CalendarOutlined,
  UserOutlined,
  EyeFilled,
  EyeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  ArrowUpOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Row, Col, theme } from 'antd';
const { Header, Sider, Content } = Layout;
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement,
    PointElement,Title, Tooltip, Legend);
const items = [

    { key: 'others', label: <span style={{ color: 'white' }}>TailAdmin</span> ,
    icon:
    <FaSignal/>},
    { key: 'others', label: 'MENU' },

  {
    key: 'sub1',
    label: <span style={{ color: 'grey' }}>Dashboard</span>,
    icon: <QrcodeOutlined />,
    children: [
      { key: '19', label: <span style={{ color: 'white' }}>eCommerce</span>},
      {
      key: '2', 
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Analytics
          </span>
          <Button type="primary" size="small" style={{ flexShrink: 0 }}>
            Pro
          </Button>
        </div>
      )
    },
      { key: '3', label: (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Marketing
          </span>
          <Button type="primary" size="small" style={{ flexShrink: 0 }}>
            Pro
          </Button>
        </div>
      )},
      {  key: '4', 
        label: (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              CRM
            </span>
            <Button type="primary" size="small" style={{ flexShrink: 0 }}>
              Pro
            </Button>
          </div>
        )},
        {  key: '5', 
            label: (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Stocks
                </span>
                <Button type="primary" size="small" style={{ flexShrink: 0 }}>
                  Pro
                </Button>
              </div>
            )},
    ],
  },
  { key: 'others', label: <span style={{ color: 'white' }}>Calendar</span>,icon:<CalendarOutlined   style={{ color: 'white' }}/> },
  { key: 'others', label: <span style={{ color: 'white' }}>Profile</span>,icon:<UserOutlined/> },
  {
    key: 'sub2',
    label: <span style={{ color: 'white' }}>Tasks</span>,
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
    label: <span style={{ color: 'white' }}>Forms</span>,
    icon: <MailOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'sub5',
    label: <span style={{ color: 'white' }}>Tables</span>,
    icon:  <TableOutlined/>,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'sub6',
    label: <span style={{ color: 'white' }}>Pages</span>,
    icon: <FileOutlined/>,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  { key: 'support', label: 'SUPPORT' },

];
 const BarGraph = () => {
    const data = {
        labels: ['M', 'T', 'W', 'Th','F','S','S'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5,8,10,9],
            backgroundColor: "blue", // First color
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            
          },
          {
            label: 'Revenue',
            data: [8, 15, 6, 10,8,4,9],
            backgroundColor: "#a3ccc7", // Second color
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      // Chart options
      const options = {
        responsive: true,
        scales: {
          x: {
            stacked: true,
            categoryPercentage: 0.6, 
            barPercentage: 0.8,
          },
          y: {
            stacked: true,
          },
        },
        elements: {
          bar: {
            borderWidth: 1, // Thin bars
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
            },
          },
        },
      };
    
      return <Bar data={data} options={options} />;
    };
  const AreaChart = () => {
    const data = {
        labels: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
          {
            
            data: [12, 19, 3, 5, 8, 10, 8],
            backgroundColor: 'rgba(75, 192, 192, 0.5)', 
            borderColor: 'rgba(75, 192, 192, 1)',
            
            tension: 0.4, 
          },
          {
            
            data: [8, 15, 6, 10, 8, 4, 7],
            backgroundColor: 'rgba(255, 99, 132, 0.5)', 
            borderColor: 'rgba(255, 99, 132, 1)',
    
            tension: 0.4, 
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
            },
          },
        },
        scales: {
          x: {
            stacked: true, 
          },
          y: {
            stacked: true, 
          },
        },
      };
    
      return <Line data={data} options={options} />;
    };
const Chart = () => {
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
                padding: '8px 8px 8px 32px', // Offset for icon
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
        <div style={{ fontWeight: 'bold',marginTop:"5px" ,marginRight:"-70px"}}>Thomas Anree</div>
        
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
        
        <Row gutter={16}>
  <Col span={6}>
    <Card
      style={{
        marginTop: '25px',
        marginLeft: '20px',
        width: '250px',
        height: '150px',
      }}
      bordered={false}
    >
      <Avatar
        size={40}
        style={{
          backgroundColor: '#f2f1ed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <EyeOutlined style={{ fontSize: '24px', color: 'blue' }} />
      </Avatar>
      <h3>$3.456K</h3>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-20px' }}>
        <h4 style={{ marginBottom: 0 }}>Total Views</h4>
        <h4 style={{ marginBottom: 0, fontSize: '16px', fontWeight: '10px' ,color:"green"}}>0.43%<ArrowUpOutlined/></h4>
      </div>
    </Card>
  </Col>



  <Row gutter={16}>
  <Col span={6}>
    <Card
      style={{
        marginTop: '25px',
        marginLeft: '20px',
        width: '250px',
        height: '150px',
      }}
      bordered={false}
    >
      <Avatar
        size={40}
        style={{
          backgroundColor: '#f2f1ed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <EyeOutlined style={{ fontSize: '24px', color: 'blue' }} />
      </Avatar>
      <h3>$45,2K</h3>
      
    
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-20px' }}>
        <h4 style={{ marginBottom: 0 }}>Total Profit</h4>
        <h4 style={{ marginBottom: 0, fontSize: '16px', fontWeight: 'light',color: 'green' }}>4.35% <ArrowUpOutlined/></h4>
        
      </div>
    </Card>
  </Col></Row>

  <Row gutter={16}>
  <Col span={6}>
    <Card
      style={{
        marginTop: '25px',
        marginLeft: '20px',
        width: '250px',
        height: '150px',
      }}
      bordered={false}
    >
      <Avatar
        size={40}
        style={{
          backgroundColor: '#f2f1ed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <EyeOutlined style={{ fontSize: '24px', color: 'blue' }} />
      </Avatar>
      <h3>2.450</h3>
      
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-20px' }}>
        <h4 style={{ marginBottom: 0 }}>Total Product</h4>
        <h4 style={{ marginBottom: 0, fontSize: '16px', fontWeight: 'light' ,color:"green"}}>2.59%<ArrowUpOutlined/></h4>
      </div>
    </Card>
  </Col></Row>

  <Row gutter={16}>
  <Col span={6}>
    <Card
      style={{
        marginTop: '25px',
        marginLeft: '20px',
        width: '250px',
        height: '150px',
      }}
      bordered={false}
    >
      <Avatar
        size={40}
        style={{
          backgroundColor: '#f2f1ed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <EyeOutlined style={{ fontSize: '24px', color: 'blue' }} />
      </Avatar>
      <h3>3.456</h3>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-20px' }}>
        <h4 style={{ marginBottom: 0 }}>Total users</h4>
        <h4 style={{ marginBottom: 0, fontSize: '16px', fontWeight: 'light',color:'blue' }}>0.95%<ArrowDownOutlined/></h4>
      </div>
    </Card>
  </Col>

    </Row></Row>


        <Content

        
        >
          
          
          <Row gutter={16}>
            <Col span={12}>
              {/* Left Part */}
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
                <Row>
  
  <Col
    span={12}
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
      }}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#d8e8e7', 
          marginRight: '8px', 
        }}
      />
      <span style={{color:"blue"}}><b>Total Revenue</b></span>
    </div>

    <h4 style={{ margin: '0' ,marginTop:"-10px"}}>12.04.2022-12.05.2022</h4>
  </Col>

  
  <Col
    span={12}
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
  >
    <div
      style={{
        display: 'flex',
        marginLeft:"-40px",
        alignItems: 'center',
        marginBottom: '8px',
      }}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#addbd0', 
          marginRight: '8px', 
        }}
      />
      <span style={{color:"#addbd0"}}><b>Total Sales</b></span>
    </div>

    <h4 style={{ margin: '0' ,marginLeft:"-40px",marginTop:"-10px"}}>12.04.2022-12.05.2022</h4>
  </Col>
</Row>


<Row justify="end" style={{ marginTop: '-60px',marginRight:"-10px" }}>
  <Col>
    <div
      style={{
        display: 'flex',
        gap: '2px', 
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: '4px 12px',
          borderRadius: '20px',
          backgroundColor: '#ffffff', 
          color: '#000000',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
      <button
    style={{
      backgroundColor: '#ffffff',
      color: '#000000',
      border: 'none',
      borderRadius: '50px', 
      padding: '4px 8px', 
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '14px',
    }}
  >

        Day</button>
      </div>
      <div
        style={{
          padding: '4px 12px',
          borderRadius: '20px',
           
          color: '#000000',
          cursor: 'pointer',
        }}
      >
        Week
      </div>
      <div
        style={{
          padding: '4px 12px',
          borderRadius: '20px',
     
          color: '#000000',
          cursor: 'pointer',
        }}
      >
        Month
      </div>
    </div>
  </Col>
</Row>



                <AreaChart/>
                
                </Card>
              </Space>
            </Col>
            <Col span={12}>
            
              <Space direction="vertical" size={16}>
                
              <Card 
                title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <span><b>Profit this week</b></span>
                      <span>This week <FaCaretDown/></span>
                    </div>
                }
                
                
                style={{
                  width: "600px",
                  height:"700px",
                  marginTop:"50px",
                  marginLeft:"30px"
                }}
        
                
              >
                <Row gutter={4} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
    <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#1890ff', 
          marginRight: '4px',  
        }}
      />
      <span>Sales</span>
    </Col>
    <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' ,marginLeft:"-160px"}}>
      <div
        style={{
          width: '20px',
          height: '20px',
          marginRight:"-250px",
          borderRadius: '50%',
          backgroundColor: '#52c41a', 
          marginRight: '4px',  
        }}
      />
      <span>Revenue</span>
    </Col>
  </Row>
                <BarGraph/>
                
    
                
              </Card>
              
            </Space>
          </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Chart;
