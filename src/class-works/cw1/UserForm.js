import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUserName: props.user?.name,
      newUserAge: props.user?.age
    }
  }

  onChangeName = e => {
    this.setState({
      newUserName: e.target.value
    })
  };

  onChangeAge = e => {
    this.setState({
      newUserAge: +e.target.value
    })
  };

  resetForm = () => {
    this.setState({
      newUserName: '',
      newUserAge: ''
    })
  };

  submitUser = () => {
    const { user } = this.props;
    const { newUserName: name, newUserAge: age } = this.state;
    const newUser = { name, age, id: user ? user.id : Date.now() };
    if (!newUser.name || !newUser.age) return alert('Name and Age is required');
    if (newUser.age < 18) return alert('Adult content');
    this.props.onSubmitUser(newUser);
    this.resetForm();
  };

  render() {
    const { newUserAge, newUserName } = this.state;
    return (
      <div className='user-form'>
        <input value={newUserName} onChange={this.onChangeName} placeholder='Ivan' name='name' type="text"/>
        <input value={newUserAge} onChange={this.onChangeAge} placeholder='18' name='age' type="number"/>
        <button onClick={this.submitUser}>Submit user</button>
      </div>
    );
  }
}

export default UserForm;
