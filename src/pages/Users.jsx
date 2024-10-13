import React, { useState } from 'react';
import { FaUserMinus, FaUserLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Layout from '../components/Layout';

const userData = [
    { id: 1, name: 'Alice', email: 'alice@example.com', status: 'Active', age: 28, location: 'New York', profilePicture: 'https://avatar.iran.liara.run/public/girl?username=Alice' },
    { id: 2, name: 'Bob', email: 'bob@example.com', status: 'Blocked', age: 32, location: 'San Francisco', profilePicture: 'https://avatar.iran.liara.run/username?username=Bob' },
    { id: 3, name: 'Carol', email: 'carol@example.com', status: 'Active', age: 24, location: 'Los Angeles', profilePicture: `https://avatar.iran.liara.run/public/girl?username=Carol` },
    { id: 4, name: 'David', email: 'david@example.com', status: 'Blocked', age: 30, location: 'Chicago', profilePicture: `https://avatar.iran.liara.run/public/boy?username=David` },
];

const userActivityData = [
    { name: 'Jan', users: 40 },
    { name: 'Feb', users: 30 },
    { name: 'Mar', users: 20 },
    { name: 'Apr', users: 50 },
    { name: 'May', users: 80 },
];

const Users = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleRemoveUser = (user) => {
        toast.success(`${user.name} has been removed.`);
    };

    const handleBlockUser = (user) => {
        toast.success(`${user.name} has been blocked.`);
    };

    const handleOpenModal = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    return (
        <Layout>
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">User Management</h1>

                {/* User Activity Chart */}
                <div className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">User Activity Over Time</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={userActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="users" fill="#3B82F6" background={{ fill: '#eee' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* User List as Table */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Registered Users</h2>
                    <table className="min-w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 text-left">Profile</th>
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Email</th>
                                <th className="py-2 px-4 text-left">Status</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user) => (
                                <motion.tr
                                    key={user.id}
                                    className="border-b hover:bg-gray-100 transition-colors duration-200"
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <td className="py-2 px-4">
                                        <img src={user.profilePicture} alt={`${user.name}'s profile`} className="w-12 h-12 rounded-full" />
                                    </td>
                                    <td className="py-2 px-4">{user.name}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.status}</td>
                                    <td className="py-2 px-4 flex items-center">
                                        <button
                                            onClick={() => handleRemoveUser(user)}
                                            className="text-red-500 hover:text-red-700 mr-4"
                                        >
                                            <FaUserMinus /> Remove
                                        </button>
                                        <button
                                            onClick={() => handleBlockUser(user)}
                                            className="text-yellow-500 hover:text-yellow-700"
                                        >
                                            <FaUserLock /> {user.status === 'Active' ? 'Block' : 'Unblock'}
                                        </button>
                                        <button
                                            onClick={() => handleOpenModal(user)}
                                            className="text-blue-500 hover:text-blue-700 ml-4"
                                        >
                                            <FaUser /> View
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* User Detail Modal */}
                {selectedUser && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <motion.div
                            className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-1/3"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">{selectedUser.name}'s Details</h2>
                            <img
                                src={selectedUser.profilePicture}
                                alt={`${selectedUser.name}'s profile`}
                                className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500 shadow-md"
                            />
                            <p className="mb-2"><strong className="text-gray-700">Email:</strong> <span className="text-gray-900">{selectedUser.email}</span></p>
                            <p className="mb-2"><strong className="text-gray-700">Status:</strong> <span className="text-gray-900">{selectedUser.status}</span></p>
                            <p className="mb-2"><strong className="text-gray-700">Age:</strong> <span className="text-gray-900">{selectedUser.age}</span></p>
                            <p className="mb-4"><strong className="text-gray-700">Location:</strong> <span className="text-gray-900">{selectedUser.location}</span></p>
                            <button
                                onClick={handleCloseModal}
                                className="mt-4 w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Users;
