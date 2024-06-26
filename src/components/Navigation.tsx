import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaServer, FaImages, FaHdd, FaRoute } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const navItems = [
  {
    icon: <FaHome />,
    title: 'Home',
    link: '/'
  },
  {
    icon: <FaServer />,
    title: 'Containers',
    link: '/containers'
  },
  {
    icon: <FaImages />,
    title: 'Images',
    link: '/images'
  },
  {
    icon: <FaHdd />,
    title: 'Volumes',
    link: '/volumes'
  },
  {
    icon: <FaRoute />,
    title: 'Networks',
    link: '/networks'
  }
];

const Navigation = () => {
  const location = useLocation();

  return (
    <Nav variant="pills" defaultActiveKey="/" justify activeKey={location.pathname}>
      {navItems.map((item, index) => (
        <Nav.Item key={index}>
          <Nav.Link href={item.link}>
            {item.icon}{' '}{item.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Navigation;
