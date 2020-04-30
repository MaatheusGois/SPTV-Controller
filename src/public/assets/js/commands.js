/* eslint-disable no-unused-vars */
const channel = (command, value) => {
  const body = JSON.stringify({
    command,
    value
  })

  fetch('http://localhost:6767/channel', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      console.log(json)
    })
    .catch(function (error) {
      console.log(error)
    })
}

const button = (command) => {
  fetch(`http://localhost:6767}/button/${command}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      console.log(json)
    })
    .catch(function (error) {
      console.log(error)
    })
}

const channelID = (id) => {
  channel('ssap://system.launcher/launch', { id })
}

const notImplemented = () => {
  console.log('not implemented')
}