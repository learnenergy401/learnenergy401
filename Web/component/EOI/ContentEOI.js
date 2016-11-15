import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import CourseEOI from './CourseEOI.js'
import { Textfield,Grid,Cell,Layout } from 'react-mdl';

class ContentEOI extends Component {

	render() {
		return (
			<div>
				<LearnHeader/>
				<CourseEOI/>
				<LearnFooter/>
			</div>
		);
	}
}

export default ContentEOI