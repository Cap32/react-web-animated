
const EventEmitter = require('emit-lite');

class NativeEventEmitter extends EventEmitter {
	addListener(...args) {
		super.on(...args);
	}

	remove() {
		super.off();
	}
}

module.exports = NativeEventEmitter;
