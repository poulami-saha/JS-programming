export class Node {
    data: any;
    next: null;
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList {
    head: any;
    tail: any;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data: any) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;

        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }

    get(index: any) {
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++
        }
        return current.data;
    }

    printAll() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertAt(index: number, data: any) {
        if (index === 0) {
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous: any;
            let i = 0;
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }
            const node = new Node(data);
            node.next = current;
            previous.next = node;

        }
    }
    removeFrom(index: number) {
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous: any;
            let i = 0;
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;

        }
    }

    alternateRemoveFrom(index: number) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            current.next = current.next.next;
            return;
        }
    }
}

const list = new LinkedList();
// list.add(10)
// list.add(20)
// list.add(30)
// list.printAll()
// console.log(list.get(2));
// list.insertAt(1, 100)
// list.printAll()
// list.removeFrom(1)
// list.printAll();

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)

////Find middle of a linked list

const findMiddle = (list: any) => {
    let slow = list.head;
    let fast = list.head;
    let prev: any;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next
    }
    if (fast === null) {//When the Linked list is even return the second middle
        return prev.next
    } else return slow; // When the Linked list is odd in count
}

console.log(findMiddle(list))