### Linked List Definition
A linked list can be visualized as a chain of nodes, where every node points to the next node.

### Important Points
* contains a link element called first
* each link carries a data field(s) and a link field called next
* each link is connected with its next link using its next link
* last link carries a link as null to mark the end of the list

### Type of Lists
* Simple (single) linked list - items navigate forward only
* Double linked list - items navigate forward and backward
* Circular list list - last item contains link of the first element as next and the first element has a link to the last element as previous.

### Basic operations
1. *Insertion* - adds an element at the beginning of the list
2. *Deletion* - deletes an element at the beginning of the *list*
3. *Display* - displays the complete list
4. *Search* - searches an element using the given key
5. *Delete* - deletes an element ising the given key

### (1) Insertions
#### Scenario 1
`[Head][LeftNode] -> [NewNode] -> [RightNode]`

#### Solution
`NewNode.next -> RightNode;`
`LeftNode.next -> NewNode;`

#### Scenario 2
`[Head][LeftNode] -> [RightNode] -> [NewNode]`
#### Solution
`RightNode.next -> NewNode;`
`NewNode.next -> NULL;`

### (2) Deletions
#### Scenario 1
`[Head][LeftNode] -> [TargetNode] -> [RightNode]`

#### Solution
`LeftNode.next -> TargetNode.next;`
`TargetNode.next -> NULL;`

### (3) Reversing
#### Scenario 1
reverse:
`[Head][LeftNode] -> [MiddleNode] -> [RightNode]`
to look like:
`[LeftNode] <- [MiddleNode] <- [RightNode][Head]`

#### Solution
`Traverse to end of list`
`RightNode.next -> MiddleNode;`
`TempNode.next -> RightNode; // To avoid losing RightNode`
`RightNode.next -> MiddleNode;`
`MiddleNode.next -> LeftNode;`
`LeftNode.next -> NULL;`
`HeadNode.next -> TempNode.next;` // re-assign the HeadNode

