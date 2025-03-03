import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <Fragment>
            <h1>LANDING PAGE</h1>
            <br></br>
            <Link to="/register">REGISTER HERE</Link>
            <br />
            <Link to="/login">LOGIN HERE</Link>
        </Fragment>
    )
}

export default LandingPage;


