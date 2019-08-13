package orderList

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestOrderList(t *testing.T) {
	assert := assert.New(t)
	list := NewList(20)

	var i, num int
	var err error

	// 测试index是否越界
	i = -1
	_, err = list.Get(i)
	assert.NotNil(err)
	i = 11
	_, err = list.Get(i)
	assert.NotNil(err)

	// 测试获取第10个元素
	i = 10
	num, err = list.Get(i)
	assert.Nil(err)
	assert.Equal(10, num)

	// 测试删除第10个元素
	i = 10
	num, err = list.Delete(i)
	assert.Nil(err)
	assert.Equal(10, num)
	assert.Equal(9, list.Length)
	assert.NotEqual(10, list.List[8])

	// 测试插入第10个元素
	i = 9
	j := 30
	num, err = list.Insert(i, j)
	assert.Nil(err)
	assert.Equal(j, num)
	assert.Equal(10, list.Length)
}
