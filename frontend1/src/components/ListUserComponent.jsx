import React, { Component } from 'react';
import UserService from '../services/UserService';
import AdminSidebar from '../pages/Admin/AdminSidebar';

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (!res.data || res.data.length === 0) {
        this.props.navigate('/add-user/_add');
      } else {
        this.setState({ users: res.data });
      }
    });
  }

  addUser() {
    this.props.navigate('/add-user/_add');
  }

  editUser(id) {
    this.props.navigate(`/add-user/${id}`);
  }

  viewUser(id) {
    this.props.navigate(`/view-user/${id}`);
  }

  deleteUser(id) {
    UserService.deleteUser(id).then(() => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  }

  
  render() {
    return (
     <div className="min-h-auto bg-gray-100 flex">
        <AdminSidebar/>

        <div className="p-6 text-center  ">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">👥 Users List</h2>

        <div className="flex justify-end mb-4">
          {/* <button
            onClick={this.addUser}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded shadow"
          >
            ➕ Add User
          </button> */}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className='py-3 px-5 text-left'>Id</th>
            
                <th className="py-3 px-5 text-center">Name</th>
                <th className="py-3 px-5 text-center">Email ID</th>
                <th className="py-3 px-5 text-center">Role</th>
                <th className="py-3 px-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {this.state.users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className='py-3 px-5'>{user.id}</td>
                  
                  <td className="py-3 px-5">{user.name}</td>
                  <td className="py-3 px-5">{user.email}</td>
                  <td className='py-3 px-5'>{user.role}</td>
                  <td className="py-3 px-5 text-center space-x-2">
                    <button
                      onClick={() => this.editUser(user.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => this.deleteUser(user.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      🗑️ Delete
                    </button>
                    {/* <button
                      onClick={() => this.viewUser(user.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                    >
                      👁️ View
                    </button> */}
                  </td>
                </tr>
              ))}
              {this.state.users.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

     </div>
      
    );
  }
}

export default ListUserComponent; 
