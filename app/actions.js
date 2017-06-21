import {CHECK} from './constants';


export function ping(server) {
  let time = new Date();
  return (dispatch) => {
    dispatch({
      type: CHECK,
      status: 'checking',
      server: server
    });
    fetch(`https://${server.host}`, {
      method: 'HEAD'
    }).then(() => dispatch({
      type: CHECK,
      status: 'done',
      server: server,
      time: new Date() - time
    }), () => dispatch({
      type: CHECK,
      status: 'fail',
      server: server,
      time: null
    }));
  };
}
