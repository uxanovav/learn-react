import React from "react";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users?count=10")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.props.usersData.map((user) => {
            return (
              <User
                name={user.name}
                followed={user.followed}
                userFollowing={this.props.userFollowing}
                userUnFollowing={this.props.userUnFollowing}
                id={user.id}
                avatar={user.photos.small}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
