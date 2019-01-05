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
var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

// Test Cases
// reverseList(1->2->3->4->5->null) --> 5->4->3->2->1->NULL
// reverseList(5->4->3->2->1->NULL) --> 1->2->3->4->5->null
// reverseList(null) --> null
