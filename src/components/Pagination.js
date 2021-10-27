import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/pagination.js";

class Pagination extends Component {
    render() {
        return (
            <Styles>
                {/* Pagination */}
                <ul className="pagination-box list-unstyled list-inline">
                    <li className="list-inline-item"><Link to={"" + "/"}><i className="las la-angle-double-left"></i></Link></li>
                    <li className="list-inline-item"><Link to={"" + "/"}>1</Link></li>
                    <li className="list-inline-item"><Link to={"" + "/"}>2</Link></li>
                    <li className="active list-inline-item"><Link to={"" + "/"}>3</Link></li>
                    <li className="list-inline-item"><Link to={"" + "/"}>...</Link></li>
                    <li className="list-inline-item"><Link to={"" + "/"}>13</Link></li>
                    <li className="list-inline-item"><Link to={"" + "/"}><i className="las la-angle-double-right"></i></Link></li>
                </ul>
            </Styles>
        )
    }
}

export default Pagination
