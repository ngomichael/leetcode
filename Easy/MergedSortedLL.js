/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let merged = new ListNode();
  let curr = merged;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = new ListNode(l1.val);
      l1 = l1.next;
      curr = curr.next;
    } else {
      curr.next = new ListNode(l2.val);
      l2 = l2.next;
      curr = curr.next;
    }
  }

  curr.next = l1 || l2;
  return merged.next;
};

// Test Cases
// mergeTwoLists(1->2->4, 1->3->4) --> 1->1->2->3->4->4
// mergeTwoLists(1, 1) --> 1->1
// mergeTwoLists(-1->5->10, -5->-2->-1) --> -5->-2->-1->1->5->10
