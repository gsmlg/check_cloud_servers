import {CHECK} from '../constants';

import {find} from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case CHECK:
      let {key} = action.server;
      let server = state[action.server.key];
      let time;
      if (action.status == 'done') {
        time = [{delayTime: action.time}];
      } else {
        time = [];
      }
      let checkedStatus = server.checkedStatus.concat(time);
      let updatedServer = Object.assign({}, server, {checkedStatus: checkedStatus, status: action.status});
      return Object.assign({}, state, {[key]: updatedServer});
    default:
      return state;
  }
}
