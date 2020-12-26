import React, { Component } from 'react';
import UserForm from "./UserForm";

class UserListItem extends Component {
  state = {
    isEdit: false
  };

  onEditUser = updatedUser => {
    this.setState({ isEdit: false });
    this.props.onEditUser(updatedUser);
  };

  render() {
    const { user, onRemoveUser } = this.props;
    const { isEdit } = this.state;
    if (isEdit) {
      return (
        <li className='user-list-item'>
          <UserForm onSubmitUser={this.onEditUser} user={user} />
          <button onClick={() => this.setState({ isEdit: false })}>cancel</button>
        </li>
      )
    }
    return (
      <li className='user-list-item'>
        <span>{user.name} - {user.age}</span>
        <button onClick={() => onRemoveUser(user.id)}>remove</button>
        <button onClick={() => this.setState({ isEdit: true })}>edit</button>
      </li>
    );
  }
}

export default UserListItem;
