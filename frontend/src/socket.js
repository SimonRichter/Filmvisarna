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
    // model is the model('class' in Java) that we want to listen to for changes
    // event is either insert, update or delete
    // data is the list of objects that has changed

    if (model == 'Showing') {
      console.log('this showing is what', event);
      console.log('what is data', data[0])
      if (event == 'update') {
        // Updates only the show that has been changed and not the entire list
        store.commit('updateShow', data[0]);
      }
      // when removing a booking from signed in user, the event is 'insert' and the data[0] has the showing.id as its id but the other fields as null
      // NOT WORKING YET
      // if (event == 'insert') {
      //   let showing = this.$store.state.showing.filter(
      //     (s) => s.id == data[0].id)[0];
      //   store.commit('updateShow', showing);
      // }
    }
    if (model == 'Booking') {
      // insert when adding a new booking
      if (event == 'insert') {
        console.log('WS: new data', data[0])
        store.commit('updateBookings', data[0])
      } else if (event == 'delete') {
        console.log('WS: deleted data', data[0])
        store.commit('removeBooking', data[0])
      }
    }
  }

  ws.onclose = () => {
    console.log('Disconnected');

    setTimeout(() => { connect }, 2000);
  }

}
