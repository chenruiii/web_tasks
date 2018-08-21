import React from "react";
//获取图片信息
let imgData = require("./img/imgDatas.json");
imgData.forEach((item,index) => {
	item.url = "./img/" + item.filename;
});

class Images extends React.Component {
	render() {
		const props = this.props;
		let imgClassName = (props.isCenter ? "block" : "");
		return (
			<li className={imgClassName}>
				<img 
					src={props.url} 
					//alt={props.filename} 
					className="img-responsive" 
				/>
			</li>
		);
	}
}

//图片按钮转化
class Options extends React.Component {
	render() {
		const props = this.props;
		let optionClassName = (props.isCenter ? "active" : "");
		return (
			<li className={optionClassName} onClick={props.optionChange}></li>
		);
	}
}

//图片前后切换
class Arrows extends React.Component {
	render() {
		const props = this.props;
		return (
			<div id="arrow">
				<button className="prev" onClick={props.arrowPrev}>
					&lt;
				</button>
				<button className="next" optionClassNameick={props.arrowNext}>
					&gt;
				</button>
			</div>
		);
	}
}
class MyCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current : 0
		};
		this.timer = null;
	}
	componentDidMount() {
		this.rearrange(0);
	}
	rearrange(index) {
		this.setState ({
			current : index
		});
	}
	arrowPrev() {
		let currentN = this.state.current-1;
		this.setState({
			current : currentN
		});
		if(currentN==-1){
			this.setState({
				current : this.props.number-1
			});
		}
	}
	arrowNext() {
		let currentN = this.state.current+1;
		this.setState({
			current : currentN
		});
		if(currentN==this.props.number){
			this.setState({
				current : 0
			});
		}
	}
	changeAuto(interval) {
		clearInterval(this.timer);
		this.timer = setInterval((interval) => {
			let currentN = this.state.current+1;
			this.setState({
				current : currentN
			});
			if(currentN==this.props.number){
				this.setState({
					current : 0
				})
			}
		}, interval);
	}
	pause() {
		clearInterval(this.timer);
	}
	render() {
		let imgList = [], optionList = [];
		imgData.forEach((item, index) => {
			imgList.push (
				<Images 
					key={index}
					{...item} 
					isCenter={this.state.current==index ? true : false} 
				/>
			);
			optionList.push (
				<Options 
					key={index} 
					isCenter={this.state.current==index ? true : false} 
					optionChange={this.change.bind(this, index)} 
				/>
			);
		});

		return (
			<div id="wrap" onMouseOver={this.pause.bind(this)} onMouseOut={this.props.auto ? this.changeAuto.bind(this, this.props.interval) : null}>
				<ul id="list">
					{imgList}
				</ul>
				<ul id="option">
					{optionList}
				</ul>
				<Arrows arrowPrev={this.arrowPrev.bind(this)} arrowNext={this.arrowNext.bind(this)} />
			</div>
		);
	}
}
MyCarousel.defaultProps = {
	number : 3,
	auto : true,
	interval : 2000
};
export default MyCarousel;

	