/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.data = [];// array with value
    this.top = 0;// index top element
  }

  // добавить элемент в начало стека, значит нужно увеличить значение top и
  // оно будет указывать на следущее пустое место
  push(element) {
    this.data[this.top] = element;
    this.top += 1;
  }

  // удалить элемент сверху стека, нужно ументшить значение top
  pop() {
    this.top -= 1;
    return this.data.pop();
  }

  // получить верхний эл стека, top - 1 т.к top пустое место
  peek() {
    return this.data[this.top - 1];
  }
}

module.exports = Stack;
