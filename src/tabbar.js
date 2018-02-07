import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import './tabbar.css'
class TabBarExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'redTab',
			hidden: false,
			fullScreen: false,
		};
		this.selectedTabList = ['redTab', 'blueTab', 'yellowTab', 'greenTab']
	}
	renderContent(pageText) {
		return (
			<div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
				<div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
				<a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
					onClick={(e) => {
						e.preventDefault();
						this.setState({
							hidden: !this.state.hidden,
						});
					}}
				>
					Click to show/hide tab-bar
        </a>
				<a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
					onClick={(e) => {
						e.preventDefault();
						this.setState({
							fullScreen: !this.state.fullScreen,
						});
					}}
				>
					Click to switch fullscreen
        </a>
			</div>
		);
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
					{this.renderContent(item.key)}
				</TabBar.Item>
			)
		})
		return (
			<div style={{ position: 'fixed', left: '0', right: '0', bottom: 0 }}>
				<TabBar
					unselectedTintColor="#949494"
					tintColor="#33A3F4"
					barTintColor="white"
					hidden={this.state.hidden}
				>
					{items}
				</TabBar>
			</div>
		);
	}
}
export default TabBarExample;