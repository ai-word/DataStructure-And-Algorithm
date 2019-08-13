package orderList

import "fmt"

type OrderList struct {
	MaxSize int
	Length  int
	List    Elem
}

type Elem []int

func NewList(maxSize int) *OrderList {
	var elem = make(Elem, 0, 20)
	for i := 1; i <= maxSize/2; i++ {
		elem = append(elem, i)
	}

	return &OrderList{
		MaxSize: maxSize,
		Length:  len(elem),
		List:    elem,
	}
}

func (l *OrderList) Get(i int) (int, error) {
	if i < 1 || i > l.Length {
		return 0, fmt.Errorf("the index should greater than zero and less than list's length")
	}

	return l.List[i-1], nil
}

func (l *OrderList) Delete(i int) (int, error) {
	if i < 1 || i > l.Length {
		return 0, fmt.Errorf("the index should greater than zero and less than list's length")
	}

	val := l.List[i-1]
	copy(l.List[i-1:], l.List[i:])
	l.List = l.List[:len(l.List)-1]
	l.Length = len(l.List)

	return val, nil
}

func (l *OrderList) Insert(i, j int) (int, error) {
	if i < 1 || i > l.Length {
		return 0, fmt.Errorf("the index should greater than zero and less than list's length")
	}
	if l.Length == l.MaxSize {
		return 0, fmt.Errorf("the list is full")
	}

	// 将第i个位置及其后面的内容放入临时切片
	tmpSlice := append(Elem{}, l.List[i-1:]...)
	// 第i个位置插入元素
	newSlice := append(l.List[:i-1], j)
	// 将临时切片追加到新的切片即可
	newSlice = append(newSlice, tmpSlice...)
	l.List = newSlice
	l.Length = len(newSlice)

	return newSlice[i-1], nil
}
