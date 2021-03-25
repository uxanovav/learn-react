import React from "react";
import User from "./User/User";
import * as axios from "axios";
import style from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=5`
      )
      .then((response) => {
        this.props.setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
      });
  }

  getNewUsers = (pageNumber) => {
    this.props.setPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`
      )
      .then((response) => {
        this.props.setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        });
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalCount / 50);
    const setNextPage = () => {
      if (this.props.currentPage < pagesCount) {
        this.getNewUsers(this.props.currentPage + 1);
      }
    };

    const setPervousPage = () => {
      if (this.props.currentPage != 1)
        this.getNewUsers(this.props.currentPage - 1);
    };
    return (
      <div>
        <div className={style.navigation}>
          <span className={style.navbutton} onClick={() => setPervousPage()}>
            &lt;&lt;&lt;
          </span>
          <span>{this.props.currentPage}</span>
          <span className={style.navbutton} onClick={() => setNextPage()}>
            &gt;&gt;&gt;
          </span>
        </div>
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
        <div className={style.navigation}>
          <span className={style.navbutton} onClick={() => setPervousPage()}>
            &lt;&lt;&lt;
          </span>
          <span>{this.props.currentPage}</span>
          <span className={style.navbutton} onClick={() => setNextPage()}>
            &gt;&gt;&gt;
          </span>
        </div>
      </div>
    );
  }
}

export default Users;
