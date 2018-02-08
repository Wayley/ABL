import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import News from './Components/News/News';
import Court from './Components/Court/Court';
import Game from './Components/Game/Game';
import My from './Components/My/My';

import { TabBar } from 'antd-mobile';
import './tabbar.css'
class TabBarExample2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'redTab',
			hidden: false,
			fullScreen: false,
		};
		this.selectedTabList = ['redTab', 'blueTab', 'yellowTab', 'greenTab']
	}
	render() {
		let list = this.props.list;
		var items = list.map((item, index) => {
			return (
				<TabBar.Item
					icon={item.icon}
					selectedIcon={item.selectedIcon}
					title={item.title}
					key={item.key}
					selected={this.state.selectedTab === this.selectedTabList[index]}
					badge={item.badge}
					dot={item.dot}
					onPress={() => {
						this.setState({
							selectedTab: this.selectedTabList[index],
						});
					}}
				>
				</TabBar.Item>
			)
		})
		return (
			<Router>
				<div style={{ position: 'fixed', left: '0', right: '0', bottom: 0 }}>
					<TabBar
						unselectedTintColor="#949494"
						tintColor="#33A3F4"
						barTintColor="white"
						hidden={this.state.hidden}
					>
						{items}
					</TabBar>
					<Route exact path="/" component={Game} />
					<Route path="/news" component={News} />
					<Route path="/court" component={Court} />
				</div>
			</Router>
		);
	}
}
class TabBarExample extends React.Component {
	static contextTypes = {
		router: React.PropTypes.object
	}
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'redTab',
			hidden: false,
			fullScreen: false,
		};
		this.selectedTabList = ['redTab', 'blueTab', 'yellowTab', 'greenTab']
	}
	render() {
		let list = this.props.list;
		var items = list.map((item, index) => {
			return (
				<TabBar.Item
					icon={item.icon}
					selectedIcon={item.selectedIcon}
					title={item.title}
					key={item.key}
					selected={this.state.selectedTab === this.selectedTabList[index]}
					badge={item.badge}
					dot={item.dot}
					onPress={() => {
						const path = `/my`
						this.setState({
							selectedTab: this.selectedTabList[index],
						});
						console.log(this.context.router)
						// this.context.router.push(path)
					}}
				>
				</TabBar.Item>
			)
		})
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">首页</Link>4444444444444444444444</li>
						<li><Link to="/court">球场</Link></li>
						<li><Link to="/game">比赛</Link></li>
						<li><Link to="/my">我的</Link></li>
					</ul>

					{/* <div style={{ position: 'fixed', left: '0', right: '0', bottom: 0 }}>
						<TabBar
							unselectedTintColor="#949494"
							tintColor="#33A3F4"
							barTintColor="white"
							hidden={this.state.hidden}
						>
							{items}
						</TabBar>
					</div> */}

					<hr />
					<Route exact path="/" component={News} />
					<Route path="/court" component={Court} />
					<Route path="/game" component={Game} />
					<Route path="/my" component={My} />
				</div>
			</Router>
		)
	}
}
export default TabBarExample;