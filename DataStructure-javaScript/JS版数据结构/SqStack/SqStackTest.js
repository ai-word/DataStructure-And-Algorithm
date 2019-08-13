var SqStack = require('./SqStack');

var stack = SqStack();

console.log('\n1. Init a SqStack: ');

stack.print();

console.log('Is the stack empty now? ', stack.isEmpty());

console.log('\n2. push 1: ');

stack.push(1);

stack.print();

console.log('Is the stack empty now? ', stack.isEmpty());

console.log('\n3. push 2: ');

stack.push(2);

stack.print();

console.log('The stack\'s length is ', stack.length());

console.log('\n4. push 3: ');

stack.push(3);

stack.print();

console.log('\n5. pop: ');

var val = stack.pop();

console.log(val);

stack.print();

console.log('\n5. Clear the stack: ');

stack.clear();

stack.print();