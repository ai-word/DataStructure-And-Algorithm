var LinkList = require('./LinkList');

var list = LinkList();

console.info('\n1. Init a LinkList: ');

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

console.info('\n5. Delete [0]: ');

list.delete(0)

list.print()

console.info('\n6. Clear the list: ');

list.clear()

list.print()
