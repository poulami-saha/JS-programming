class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.append = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
};
DoublyLinkedList.prototype.prepend = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
};
DoublyLinkedList.prototype.insertAt = function (data, index) {
  if (index < 0 || index > this.length) {
    return null;
  }
  if (index === 0) {
    this.prepend(data);
  }
  if (index === this.length) {
    this.append(data);
  }

  const newNode = new Node(data);

  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  newNode.next = current.next;
  newNode.prev = current;
  current.next.prev = newNode;
  current.next = newNode;

  this.length++;
};

DoublyLinkedList.prototype.printAll = function () {
  let current = this.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.length) {
    return null;
  }
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.data;
};

DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index > this.length) {
    return null;
  }
  if (index === 0) {
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
  } else if (index === this.length - 1) {
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
  } else {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }
  this.length--;
};

DoublyLinkedList.prototype.contains = function (data) {
  let current = this.head;
  while (current) {
    if (current.data === data) {
      return true;
    }
    current = current.next;
  }
  return false;
};
const list = new DoublyLinkedList();
list.append(100);
list.append(200);
list.append(300);
list.append(400);
list.prepend(500);
list.insertAt(600, 2);

//list.printAll();

//console.log(list.get(2));

list.remove(2);
list.printAll();
console.log(list.contains(200));

//Find Pair Sum

const findPairSum = (array, target) => {
  const seen = new DoublyLinkedList();
  for (let num of array) {
    const diff = target - num;
    if (seen.contains(diff)) {
      return [diff, num];
    }
    seen.append(num);
  }

  return null;
};
const nums = [2, 6, 11, , 12, 6, 10];
const target = 8;
console.log(findPairSum(nums,target));
