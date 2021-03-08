// Create an emitter with the following API
// emitter = new Emitter();
// To subscribe to an event 
// sub = emitter.subscribe("event_name", callback);
// To emit an event with n functions
// sub.emit('event_name', foo, 42)
// and to release a subscription
// sub.release();

class Emitter {
    constructor(events = {}) {
        this.events = events
    }

    subscribe(name, callback){
        (this.events[name] || (this.events[name] = [])).push(callback)
    
        return {
            release: () => this.events[name] && this.events[name].splice(this.events[name].indexOf(callback) >>> 0, 1)
        }
    }

    emit(name, ...args) {
        return (this.events[name] || []).map(func => func(...args))
    }
}