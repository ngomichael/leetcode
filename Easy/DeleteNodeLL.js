/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  if (node) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
};

// Test Cases
// Linked List 1->2->3->4->5->null
// deleteNode(5) --> 1->2->3->4->null
// deleteNode(2) --> 1->3->4->5->null
// deleteNode(null) --> 1->2->3->4->5->null
