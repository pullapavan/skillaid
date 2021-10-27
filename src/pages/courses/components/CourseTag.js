import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Styles } from '../styles/courseTag.js';

class CourseTag extends Component {
    render() {
        return (
            <Styles>
                {/* Course Tag */}
                <div className="course-tag">
                    <h5>Tags</h5>
                    <div className="tag-box">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Jquery</p>
                        <p>PHP</p>
                        <p>Bootstrap</p>
                        <p>Javascript</p>
                    </div>
                </div>
            </Styles>
        )
    }
}

export default CourseTag
