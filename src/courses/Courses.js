import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Courses = (props) => {
    // course details
    const {cover, title, price, owner} = props.course;

    return (
            <div className="col-10 my-3 mx-auto col-md-6">
                <article id="courses" className="h-100">
                    <img src={cover} className="w-100" alt=""/>
                    <div className="m-4 text-center">
                        <h3>{title}</h3>
                        <h6>Instructor: {owner}</h6>
                        <h4>Price: ${price}</h4>
                        <button onClick={() => props.addCourse(props.course)} className="btn btn-danger mt-3 enroll"> <FontAwesomeIcon icon={faClipboardList}/> Enroll Now</button>
                    </div>
                </article>
            </div>
    );
};

export default Courses;