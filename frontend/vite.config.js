export default {
  proxy: {
    "/rest": "http://localhost:5000",
    "/api":  "http://localhost:5000"
  }
}

// när man skapar en ny config fil så behöver mna starta om Vue server
// open terminal > ctrl c för att starta om servern > $ npm run dev >