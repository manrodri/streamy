import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to={`/`} className="active item">
                Streamy
            </Link>

            {/*<Link className="item">*/}
            {/*    Friends*/}
            {/*</Link>*/}
            <div className="right menu">
                <Link to={`/`} className="ui item">
                    All streams
                </Link>
                <Link to={`/login`} className=" item">
                Login
            </Link>

            </div>
        </div>

    )
}

export default Header;