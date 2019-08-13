var SqList = require('./SqList');

var list = SqList();

console.info('\n1. Init a SqList: ');

list.print()

console.log('Is the list empty now? ', list.isEmpty())

console.info('\n2. Insert 1 at [0]: ');

list.insert(0, 1);

list.print()

console.log('Is the list empty now? ', list.isEmpty())

console.info('\n3. Insert 2 at [0]: ');

list.insert(0, 2);

list.print()

console.log('The list\'s length is ', list.length())

console.info('\n4. Insert 1 at [0]: ');

list.insert(0, 1);

list.print()

console.info('\n5. Find 1 in list: (print the indexes array) ');

console.log(list.find(1));

console.info('\n6. Delete [0]: ');

list.delete(0)

list.print()

console.info('\n7. Clear the list: ');

list.clear()

list.print()