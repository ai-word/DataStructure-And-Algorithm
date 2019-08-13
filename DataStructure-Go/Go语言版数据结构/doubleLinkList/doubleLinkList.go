package doubleLinkList

import "fmt"

type Node struct {
	Data int
	Prev *Node
	Next *Node
}

type DoubleLinkList struct {
	Length int
	Head   *Node
	Tail   *Node
}

func NewDoubleLinkList() *DoubleLinkList {
	node := &Node{
		Prev: nil,
		Next: nil,
	}

	return &DoubleLinkList{
		Length: 0,
		Head:   node,
		Tail:   node,
	}
}

func (l *DoubleLinkList) Append(e int) error {

	newNode := &Node{
		Data: e,
		Next: nil,
	}

	// Head节点不存储元素
	if l.Length == 0 {
		newNode.Prev = nil
		l.Head.Next = newNode
	} else {
		newNode.Prev = l.Tail
		l.Tail.Next = newNode
	}
	l.Tail = newNode

	l.Length++

	return nil
}

func (l *DoubleLinkList) Get(i int) (*Node, error) {
	if err := l.checkIndex(i); err != nil {
		return nil, err
	}

	node := l.Head
	for j := 0; j < i; j++ {
		node = node.Next
	}

	return node, nil
}

func (l *DoubleLinkList) Insert(i int, e int) error {
	if err := l.checkIndex(i); err != nil {
		return err
	}

	newNode := &Node{
		Data: e,
	}

	// 获取第i-1个节点
	node := l.Head
	for j := 0; j < i-1; j++ {
		node = node.Next
	}

	newNode.Prev = node
	newNode.Next = node.Next
	node.Next.Prev = newNode
	node.Next = newNode

	l.Length++

	return nil
}

func (l *DoubleLinkList) Delete(i int) error {
	if err := l.checkIndex(i); err != nil {
		return err
	}

	// 获取第i个节点
	node := l.Head
	for j := 0; j < i; j++ {
		node = node.Next
	}

	node.Prev.Next = node.Next
	node.Next.Prev = node.Prev

	l.Length--

	return nil
}

func (l *DoubleLinkList) checkIndex(i int) error {
	if i < 1 || i > l.Length {
		return fmt.Errorf("the index is invalid")
	}

	return nil
}
