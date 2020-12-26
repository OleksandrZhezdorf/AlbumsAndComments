import React, { Component } from 'react';
import UserForm from "./UserForm";
import UserListItem from "./UserListItem";

class UserList extends Component {
  state = {
    users: [
      { id: '1', name: 'Oleh', age: 25 },
      { id: '2', name: 'Masha', age: 20 },
      { id: '3', name: 'Kostya', age: 15 },
    ],
  };

  addUser = newUser => {
    this.setState({
      users: [...this.state.users, newUser]
    })
  };

  removeUser = id => {
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    })
  };

  editUser = updatedUser => {
    this.setState({
      users: this.state.users.map(user => user.id === updatedUser.id ? updatedUser : user)
    })

  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <UserForm onSubmitUser={this.addUser} />
        <ul>
          {users.map(user =>
            <UserListItem
              key={user.id}
              user={user}
              onRemoveUser={this.removeUser}
              onEditUser={this.editUser}
            />)}
        </ul>
      </div>
    );
  }
}

export default UserList;
