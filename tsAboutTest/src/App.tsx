import React from "react";

import "./App.css";

import styles from "./index.less";

// import styles fimport "antd/dist/antd.css";rom "./App.css";
// import "antd/dist/antd.css";
import { Button } from "antd";
// import style from "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <header className="a">
        <Button>点击</Button>
      </header>
      <div className={styles.a}>开始的开始</div>
    </div>
  );
};

export default App;

// 配置动态路由（二级路由）  dynamic

// 使用公司自带的 富文本编辑器 进行一些测试 braft-editor

// 进行model的使用 动态加载

// 使用sorttable拖拽排序

// 使用moment进行时间的处理

// Immutable 一旦创建 数据就不可以发生改变（不可对里面的内容添加，修改之类的操作）  一旦改变就会生成一个新的对象，原来的仍然不会改变 比深复制内存消耗低

// lrz 进行图片的压缩

// qs进行数据格式的处理
