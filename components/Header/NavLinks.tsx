import React from "react";

import { Link, links } from "./links";

export const NavLinks: React.FC = () => {
    const linksList = links.map((link: Link) => (
        <li key={link.id}>
            <a href={link.href}>{link.title}</a>
        </li>
    ));

    return <ul>{linksList}</ul>;
};
