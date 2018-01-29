import React from 'react';
import "./index.scss"

export default class Dragnav extends React.Component{
	constructor(props){
		super(props);
		this.img = require("../../img/attention.png");
	}
	render(){
		return(
			<div className="nav">
				<ul>
					<li className="nav-item"><img src={this.img} /><span>我的关注</span></li>
				</ul>
			</div>
		)
	}
}
