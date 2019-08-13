package doubleLinkList

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDoubleLinkList(t *testing.T) {
	assert := assert.New(t)
	// 初始化
	list := NewDoubleLinkList()
	assert.Equal(0, list.Length)

	var node *Node
	var err error

	err = list.Append(1)
	assert.Nil(err)
	assert.Equal(1, list.Length)
	assert.Equal(1, list.Head.Next.Data)
	assert.Equal(1, list.Tail.Data)

	// append一些数据
	for i := 2; i <= 10; i++ {
		err = list.Append(i)
		assert.Nil(err)
		assert.Equal(i, list.Length)
	}
	assert.Equal(10, list.Length)

	// 获取第5个节点
	node, err = list.Get(5)
	assert.Nil(err)
	assert.Equal(5, node.Data)

	// 在第5个节点插入元素555
	err = list.Insert(5, 555)
	assert.Nil(err)
	node, err = list.Get(5)
	assert.Nil(err)
	assert.Equal(11, list.Length)
	assert.Equal(555, node.Data)

	// 删除第5个节点
	err = list.Delete(5)
	assert.Nil(err)
	node, err = list.Get(5)
	assert.Nil(err)
	assert.Equal(10, list.Length)
	assert.Equal(5, node.Data)

}
