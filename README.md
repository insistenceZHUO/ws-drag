# ws-drag

####### 一框基于 react 的的拖住组件，只需要简单的几代码，就能够实现拖拽交换数组的位置，无需繁琐的配置。

####### https://codesandbox.io/s/github/react-dnd/react-dnd/tree/gh-pages/examples_hooks_js/04-sortable/cancel-on-drop-outside?from-embed=&file=/src/Card.jsx

####### 上面是用 react-dnd 实现的效果，需要大量的代码，以及配置，使用 wsdrag，仅仅只需要几行代码，就可以实现，现在就让我们来体验下吧

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
```
