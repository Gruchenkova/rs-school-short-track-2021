// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
//first in first out
class Queue {
  constructor () {
    this.data = []; //список наших элементов
    this.rear = 0; //значение используемое для хранения позиции, в которой будет сохранён следцющий элемент
  }
  get size() {
    return this.rear
  }
  //вставить элемент в конец очереди, значит нужно увеличить rear
  enqueue(element) {
    this.data [this.rear] = element;
    this.rear = this.rear + 1;
  }
  //удалить передний элемент из очереди, значит нужно уменьшить rear
  dequeue() {
    if (this.size() != 0){
      this.rear = this.rear - 1;
    return this.data.shift()
    }
  }
}

module.exports = Queue;
