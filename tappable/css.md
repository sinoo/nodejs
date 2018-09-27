<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2016 by dengyajun (http://jsbin.com/sutige/10/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
#### table边框圆角

* table的border-radius在表格的border-collapse:collapse不能正常使用。
* table的th在表格中存在radius时内角无效果（chrome48不正常，FF44、IE11上正常）。通过调试工具查看th元素，会发现每个浏览器上是一致的形状，但是在chrome上th覆盖了table的边框造成内角无效果。为th添加border-top-left-radius可解决，该属性会造成IE11的th左侧产生一条白线，故加上-webkit-前缀，只解决chrome的显示问题，奇怪的是在chrome调试工具中styles里该属性会被划掉，但是计算效果里仍然会有。

#### 对角线

* 用两个三角形覆盖背景，留出斜线，但是对角线宽度不能控制。
* 水平线通过transform:rotate(deg)旋转合适的度数，长度是对角线长，旋转点是transform-

### tips

* th默认的vertical-align是bottom，td默认的vertical-align是middle。