function Queue () {
    collection = []
    this.print = function() {
        console.log(collection)
    }
    this.enqueue = function(element) {
        // add a new element at the end of queue
        collection.push(element)
    }
    this.dequeue = function() {
        // shift() is used to remove and return the element at index = 0 (the first element added)
        return collection.shift()
    }
    this.front = function() {
        // to return the element at the front of queue with will be removed if we used shift()
        return collection[0]
    }
    this.size = function() {
        return collection.length
    }
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

// for example a queue at a certain market
var q = new Queue()
// is the queue empty
console.log(q.isEmpty())
// Ahmed joined the queue
q.enqueue('Ahmed')
// then Ali joined to stand behind Ahmed
q.enqueue('Ali')
// then Mohammed joined
q.enqueue('Mohammed')
// so how many people are in queue now
console.log(q.size())
// and who are in queue now
q.print()
// Ahmed left the queue
q.dequeue()
// who is at the front of queue now
console.log(q.front())
// who are still there in queue
q.print()
