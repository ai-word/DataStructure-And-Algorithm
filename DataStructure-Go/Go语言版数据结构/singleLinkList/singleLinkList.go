package singleLinkList

import "fmt"

type Node struct {
	Data int
	Next *Node
}

type SingleLinkList struct {
	Length int
	Head   *Node
}

// 初始化，头结点不存储数据
func NewSingleLinkList() *SingleLinkList {
	node := &Node{
		Next: nil,
	}

	return &SingleLinkList{
		Length: 0,
		Head:   node,
	}
}

func (l *SingleLinkList) Append(e int) error {
	newNode := &Node{
		Data: e,
	}

	node := l.Head
	for j := 0; j < l.Length; j++ {
		node = node.Next
	}
	node.Next = newNode

	l.Length++

	return nil
}

func (l *SingleLinkList) Get(i int) (*Node, error) {
	if err := l.checkIndex(i); err != nil {
		return nil, err
	}

	node := l.Head
	for j := 0; j < i; j++ {
		node = node.Next
	}

	return node, nil

}

func (l *SingleLinkList) Insert(i int, e int) error {
	if err := l.checkIndex(i); err != nil {
		return err
	}

	newNode := &Node{
		Data: e,
	}

	node := l.Head
	// 获取第i-1个节点
	for j := 0; j < i-1; j++ {
		node = node.Next
	}
	// 以下赋值顺序不能弄反
	newNode.Next = node.Next
	node.Next = newNode

	l.Length++

	return nil
}

func (l *SingleLinkList) Delete(i int) error {
	if err := l.checkIndex(i); err != nil {
		return err
	}

	node := l.Head
	for j := 0; j < i-1; j++ {
		node = node.Next
	}
	node.Next = node.Next.Next
	l.Length--

	return nil
}

func (l *SingleLinkList) checkIndex(i int) error {
	if i < 1 || i > l.Length {
		return fmt.Errorf("the index is invalid")
	}

	return nil
}
