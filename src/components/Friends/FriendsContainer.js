import {connect} from "react-redux";

import Friends from "./Friends";

let MapStateToProps = (state) => {
    return {
        friendsData: state.friendsReducer.friendsData
    }
}

const FriendsContainer = connect(MapStateToProps)(Friends);

export default FriendsContainer;