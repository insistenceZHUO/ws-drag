# ws-drag

## 安装方式：

  npm install wsdrag
  
 
## 使用方式：
 
import React, { useState } from 'react';

const data = [
  { name: '马云', sort: 1 },
  { name: '化腾', sort: 2 },
  { name: '我', sort: 3 },
];


function parent() {

  const [list, setList] = useState(data)
  
  const change = (items) => {
    console.log(items) // 获取交换成功后的值
  }
  
  return (
    <ul>
     <WsDrag items={ulList} onChange={items => change(items)}>
      {list.map(item => {
        return <li key={item.index}>{item.name}</li>
      })}
      </WsDrag>
    </ul>
  )
}
