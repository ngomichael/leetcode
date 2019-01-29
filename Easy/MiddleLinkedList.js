/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Use two pointers, one slow and one fast
// Once fast reaches the end then the slow pointer will
// be in the middle
var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

// Test Cases
// middleNode([1, 2, 3, 4, 5]) --> 3
// middleNode([1, 2, 3, 4, 5, 6]) --> 4
// middleNode([1, 2, 3]) --> 2
