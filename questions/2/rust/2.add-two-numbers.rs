// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dump_head = ListNode::new(0);
        let mut current = &mut dump_head.next;
        let mut x = l1;
        let mut y = l2;
        let mut carry = 0;
        let node_val = |node:&Option<Box<ListNode>>| node.as_ref().map_or(0, |x| x.val);
        let node_next = |node:Option<Box<ListNode>>| node.map_or(None, |x| x.next);

        while x.is_some() || y.is_some() || carry != 0 {
            let sum = node_val(&x) + node_val(&y) + carry;
            *current = Some(Box::new(ListNode::new(sum % 10)));
            current = &mut current.as_mut().unwrap().next;
            carry = sum / 10;
            x = node_next(x);
            y = node_next(y);
        }

        dump_head.next
    }
}