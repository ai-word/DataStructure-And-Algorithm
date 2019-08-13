package singleLinkList

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSingleLinkList(t *testing.T) {
	assert := assert.New(t)
	// 初始化
	list := NewSingleLinkList()
	assert.Equal(0, list.Length)

	var node *Node
	var err error

	// 生成一些数据
	for j := 1; j < 11; j++ {
		list.Append(j)
	}
	assert.Equal(10, list.Length)
	assert.Equal(1, list.Head.Next.Data)

	// 获取第5个元素
	node, err = list.Get(5)
	assert.Nil(err)
	assert.Equal(5, node.Data)

	// 插入第5个元素
	err = list.Insert(5, 555)
	assert.Nil(err)
	assert.Equal(11, list.Length)
	node, err = list.Get(5)
	assert.Equal(555, node.Data)

	// 删除第5个元素
	err = list.Delete(5)
	assert.Nil(err)
	assert.Equal(10, list.Length)
	node, err = list.Get(5)
	assert.Equal(5, node.Data)
}
