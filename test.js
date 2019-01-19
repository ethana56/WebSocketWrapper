const Wrapper = require('./Wrapper')
const Events = require('events')


class TransportDummy extends Events.EventEmitter {
    constructor() {
        super()
    }

    createConnection() {
        this.emit('connection', new WebSocketDummy(), {})
    }
}

class ServerDummy {
    Server() {
        return TransportDummy
    }
}

class WebSocketDummy {
    constructor() {

    }

    send(data) {

    }

    close(event) {
        this.emit('close', event)
    }
}

wrapper = new Wrapper({}, new ServerDummy())