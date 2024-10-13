import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { toast } from 'react-hot-toast';
import Layout from '../components/Layout';
import { FaUsers, FaClipboardList, FaServicestack, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const data = [
    { name: 'Jan', bookings: 30 },
    { name: 'Feb', bookings: 45 },
    { name: 'Mar', bookings: 50 },
    { name: 'Apr', bookings: 70 },
    { name: 'May', bookings: 85 },
    { name: 'Jun', bookings: 100 },
];

const pieData = [
    { name: 'Users', value: 400 },
    { name: 'Service Providers', value: 300 },
    { name: 'Services', value: 300 },
    { name: 'Bookings', value: 200 },
];

const pieData2 = [
    { name: 'Completed', value: 100 },
    { name: 'Pending', value: 50 },
    { name: 'Canceled', value: 30 },
];

const recentBookings = [
    { id: 1, service: 'Housekeeping', provider: 'Alice', date: '2024-10-01', status: 'Completed' },
    { id: 2, service: 'Babysitting', provider: 'Bob', date: '2024-10-02', status: 'Pending' },
    { id: 3, service: 'Therapy', provider: 'Carol', date: '2024-10-03', status: 'Completed' },
    { id: 4, service: 'Carpentry', provider: 'David', date: '2024-10-04', status: 'Canceled' },
];

const Dashboard = () => {
    const handleNotify = () => {
        toast.success('Dashboard Loaded Successfully!');
    };

    React.useEffect(() => {
        handleNotify();
    }, []);

    return (
        <Layout>
            <div className="p-6 bg-white min-h-screen">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">Dashboard</h1>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { title: 'Total Users', value: 120, icon: <FaUsers className="text-3xl" />, color: 'bg-blue-500' },
                        { title: 'Total Service Providers', value: 75, icon: <FaClipboardList className="text-3xl" />, color: 'bg-green-500' },
                        { title: 'Total Services', value: 50, icon: <FaServicestack className="text-3xl" />, color: 'bg-yellow-500' },
                        { title: 'Total Bookings', value: 200, icon: <FaChartLine className="text-3xl" />, color: 'bg-purple-500' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 rounded-lg shadow-lg text-white ${item.color} transform hover:scale-105 transition-transform duration-300`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center mb-2">
                                {item.icon}
                                <h3 className="text-lg font-semibold ml-2">{item.title}</h3>
                            </div>
                            <p className="text-2xl">{item.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Line Chart Section */}
                <div className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Bookings Over Time</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="bookings" stroke="#3B82F6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Service Distribution</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value" fill="#8884d8">
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Booking Status Distribution</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={pieData2} cx="50%" cy="50%" outerRadius={80} dataKey="value" fill="#8884d8">
                                    {pieData2.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={['#4CAF50', '#FF9800', '#F44336'][index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Bookings Table */}
                <motion.div className="bg-white rounded-lg shadow-lg p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Bookings</h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 text-left">Service</th>
                                <th className="py-2 px-4 text-left">Provider</th>
                                <th className="py-2 px-4 text-left">Date</th>
                                <th className="py-2 px-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className={`border-b hover:bg-gray-100 transition-colors duration-200`}>
                                    <td className="py-2 px-4">{booking.service}</td>
                                    <td className="py-2 px-4">{booking.provider}</td>
                                    <td className="py-2 px-4">{booking.date}</td>
                                    <td className="py-2 px-4">
                                        <span className={`inline-block px-2 py-1 rounded-full text-white ${booking.status === 'Completed' ? 'bg-green-500' : booking.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </Layout>
    );
};

export default Dashboard;
