import React from 'react';
import { FaUsers, FaServicestack, FaClipboardList, FaChartLine, FaRegComment, FaFileAlt, FaTachometerAlt, FaSignOutAlt, FaChartBar, FaBell, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Badge, Dropdown, Menu } from 'antd';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNotify = () => {
    toast.success('Welcome to the Admin Dashboard!');
  };

  const handleLogout = () => {
    toast.success('Logged out successfully!');
    navigate('/');
  };

  React.useEffect(() => {
    handleNotify();
  }, []);

  // Determine active link
  const isActive = (path) => location.pathname === path;

  // Sample notification messages
  const notifications = [
    { id: 1, message: 'New user registered', time: '2 mins ago', type: 'info' },
    { id: 2, message: 'Service request pending approval', time: '5 mins ago', type: 'warning' },
    { id: 3, message: 'Sales report generated', time: '10 mins ago', type: 'info' },
  ];

  // Create dropdown menu
  const menu = (
    <Menu className="w-64">
      <Menu.ItemGroup title="Notifications" className="font-bold text-lg mb-2" />
      {notifications.map((notification) => (
        <Menu.Item key={notification.id} className="flex items-center hover:bg-blue-100 transition duration-200">
          {notification.type === 'info' ? <FaInfoCircle className="mr-2 text-blue-500" /> : <FaExclamationTriangle className="mr-2 text-yellow-500" />}
          <div className="flex justify-between w-full">
            <span>{notification.message}</span>
            <span className="text-gray-500 text-sm">{notification.time}</span>
          </div>
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item className="text-center text-blue-500">View All Notifications</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white shadow-lg w-64 h-full">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-500 ml-10 mt-10">Ablelyf</h1>
        </div>
        <nav className="ml-3">
          <ul>
            {[
              { name: 'Dashboard', icon: <FaChartBar />, path: '/dashboard' },
              { name: 'Users', icon: <FaUsers />, path: '/users' },
              { name: 'Services', icon: <FaServicestack />, path: '/services' },
              { name: 'Service Providers', icon: <FaClipboardList />, path: '/providers' },
              { name: 'Bookings', icon: <FaClipboardList />, path: '/bookings' },
              { name: 'Sales', icon: <FaChartLine />, path: '/sales' },
              { name: 'Analytics', icon: <FaTachometerAlt />, path: '/analytics' },
              { name: 'Feedback', icon: <FaRegComment />, path: '/feedback' },
              { name: 'Reports', icon: <FaFileAlt />, path: '/reports' },
            ].map((item, index) => (
              <Link to={item.path} key={index}>
                <li className={`flex items-center p-2 my-2 mr-2 rounded-lg cursor-pointer hover:bg-blue-100 transition duration-200 ${isActive(item.path) ? 'bg-blue-200' : ''}`}>
                  <span className="text-xl">{item.icon}</span>
                  <span className="ml-4 text-base font-medium">{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow flex items-center justify-between px-4">
          <h1 className="text-xl font-bold">Admin</h1>
          <div className="flex items-center mr-2">
            <Dropdown overlay={menu} trigger={['click']} className='mr-5'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 relative mr-4"
              >
                <Badge count={notifications.length} overflowCount={99}>
                  <FaBell className="text-xl" />
                </Badge>
              </motion.button>
            </Dropdown>
            <button className="text-gray-600" onClick={handleLogout}>
              <FaSignOutAlt />
            </button>
          </div>
        </header>

        <main className="mt-16 p-4 overflow-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
