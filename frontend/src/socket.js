import store from './store.js'

let ws;
connect();


function connect() {

  ws = new WebSocket('ws://localhost:5000/watch-collections')
  console.log('Connecting websocket...')

  ws.onopen = () => {
    console.log('Connected')
  }

  ws.onmessage = MessageEvent => {
    const watchData = JSON.parse(MessageEvent.data);

    const { model, event, data } = watchData;
    console.log('model', model);
    console.log('event', event);
    console.log('data', data);

    if (model == 'Showing') {
      if (event == 'update') {
        store.commit('updateShow', data[0]);
      }
    }
  }

  ws.onclose = () => {
    console.log('Disconnected');

    setTimeout(() => { connect }, 2000);
  }

}
