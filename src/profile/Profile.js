import React from 'react';
import './Profile.css';
import faizur from './faizur.jpg';
import giphy from './giphy.gif'

const Profile = (props) => {
    // adding course total price
    let total = 0;
    props.courses.map(course => total += course.price);
    function done() {
        document.getElementById('profile').innerHTML = `<h4 style="text-align:center"> Successfully Enrolled!!!  </h4> <img style="display:block;margin:auto;border-radius:50%;" src= ${giphy} alt="Purchase Done"/>`;
    }

    return (
        <section id="profile">
            <div className="container">
                <div className="bigDiv d-flex flex-column">
                    <div className="div">
                        <img src={faizur} alt="faizur"/>
                    </div>
                    <div className="div">
                        <h2 className="mt-2 mt-md-5 name">Md. Faizur Rahman Khan</h2>
                        <h3>Enrollments: {props.courses.length}</h3>
                        <h3>Price: ${total}</h3>
                        
                        
                        <button className="btn btn-warning my-2" onClick={done}>Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
