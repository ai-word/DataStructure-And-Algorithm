var Queue = require('./Queue');

var queue = Queue();

console.log('\n1. Init a Queue: ');

queue.print();

console.log('Is the queue empty now? ', queue.isEmpty());

console.log('\n2. push 1: ');

queue.push(1);

queue.print();

console.log('Is the queue empty now? ', queue.isEmpty());

console.log('\n3. push 2: ');

queue.push(2);

queue.print();

console.log('The queue\'s length is ', queue.length());

console.log('\n4. push 3: ');

queue.push(3);

queue.print();

console.log('\n5. remove: ');

var val = queue.remove();

console.log(val);

queue.print();

console.log('\n5. Clear the queue: ');

queue.clear();

queue.print();