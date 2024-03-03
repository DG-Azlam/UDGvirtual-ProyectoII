import React from "react";
import {Link} from "react-router-dom";

const links = [ 
    {
    name: "NewDoc",
    href: "/NewDoc", 
    },
];

const NavBar = () => {
    return (
    <div>
        {links.map(x => (
            <div key={x}>
                <Link to={x.href}>{x.name}</Link>
            </div>
            ))}
    </div>
    );
};

export default NavBar;