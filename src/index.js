import state from "./Redux/state";
import {rerender} from "./render";
import {addPost,updateCurrentPostText} from "./Redux/state";

rerender(state,addPost,updateCurrentPostText);