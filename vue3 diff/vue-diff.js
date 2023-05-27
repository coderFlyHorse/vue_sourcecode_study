//  vdom 虚拟dom
//  old 老节点
//  new 新节点
//  old array a b c d e f 很多个老节点组成的数组
//  new array a d e f b c  g 老节点和新节点组成的新数组

// mountElement 新增元素
// patch 复用元素
// unmount 删除元素
// todo 
// move 元素移动
exports.isArray = (c1, c2, { mountElement, patch, unmount, move }) => {

    // 新老节点一致，不做处理
    function isSameVnodeType(n1, n2) {
        return n1.key === n2.key
    }

    let i = 0

    const l1 = c1.length //老节点数组的长度
    const l2 = c2.length //新节点数组的长度

    let e1 = l1 - 1 //老节点数组的最后一项
    let e2 = l2 - 1 //新节点数组的最后一项

    // *1. 从左边往右边进行遍历，如果可以复用就继续，如果不能，就停止
    while (i < e1 && i < e2) {
        const n1 = c1[i]; //从左往右遍历老节点数组 i++
        const n2 = c2[i]; //从左往右遍历新节点数组 i++

        if (isSameVnodeType(n1, n2)) {
            patch(n1.key)
        } else {
            break
        }
        i++
    }
    // *2. 从右边往左边进行遍历，如果可以复用就继续，如果不能，就停止
    while (i < e1 && i < e2) {
        const n1 = c1[e1]; //老节点数组的最后一项
        const n2 = c2[e2]; //新节点数组的最后一项

        if (isSameVnodeType(n1, n2)) {
            patch(n1.key)
        } else {
            break
        }
        e1--
        e2--
    }




}