import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'

import { Button, Icon } from 'antd-mobile';
import TabBarExample from './tabbar';
import styles from './App.css';

import BasicExample from './Components/testCom/test'
const tabs = [
  {
    title: '资讯',
    key: 'news',
    icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
    selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
    badge: 2,
  }, {
    title: '场地',
    key: 'court',
    icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
    selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
    badge: 'new',
  }, {
    title: '比赛',
    key: 'game',
    icon: 'https://zos.alipayobjects.com/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
    selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
    dot: true,
  }, {
    title: '我的',
    key: 'my',
    icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
    selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
    badge: '1',
  }
];
class App extends Component {

  render() {
    return (
      <div>
        <TabBarExample list={tabs} />
        {/* <BasicExample />
         */}
      </div>
    );
  }
}

export default App;
