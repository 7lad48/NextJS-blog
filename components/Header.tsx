import React from 'react';
import Navigation, {NavItemType} from "@/components/Navigation";

const navItems: NavItemType[] = [
    {name: 'Home', href:'/'},
    {name: 'Blog', href:'/blog'},
    {name: 'About', href:'/about'},
]
function Header() {
    return (
        <header>
            <Navigation items={navItems}/>
        </header>
    );
}

export default Header;