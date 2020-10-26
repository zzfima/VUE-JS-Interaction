export { CurrentTimeJS };

class CurrentTimeJS {
    constructor() {
        var events = require('events');
        this.eventEmitter = new events.EventEmitter();
    }

    addListener(listner) {
        this.eventEmitter.addListener('some_behaviour', listner);
    }

    get_current_time() {
        return Date.now();
    }

    time_request() {
        this.eventEmitter.emit('some_behaviour');
    }
}