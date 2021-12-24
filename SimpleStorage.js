// @dev A basic storage example

class SimpleStorage {
    init() {
        storage.put("value1", "hello")
    }
    get() {
        console.log("getting")
        return storage.get("value1")
    }
    change(someone) {
        storage.put("value1", someone)

    }

}

module.exports = SimpleStorage;