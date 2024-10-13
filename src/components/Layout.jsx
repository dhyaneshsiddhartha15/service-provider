import React from 'react';
import { FaUsers, FaServicestack, FaClipboardList, FaChartLine, FaRegComment, FaFileAlt, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg w-64 h-full`}>
        <div className="flex justify-between items-center p-4">
          <h1 className={`text-2xl font-bold text-blue-500 ml-10 mt-10`}>Ablelyf</h1>
        </div>
        <nav className="ml-3">
          <ul>
            {[
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
                <li className={`flex items-center p-2 my-2 rounded-lg cursor-pointer hover:bg-blue-100 transition duration-200`}>
                  <span className="text-xl">{item.icon}</span>
                  <span className={`ml-4 text-base font-medium`}>{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow">
          <div className="flex items-center justify-between px-4 h-full">
            <h1 className="text-xl font-bold">Admin</h1>
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
