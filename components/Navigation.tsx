'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

export type NavItemType = {
    name: string
    href: string
}
type NavigationPropsType = {
    items: NavItemType[]
}
function Navigation(props: NavigationPropsType) {
    const {
        items,
        ...rest
    } = props
    const pathname = usePathname()
    return (
        <nav>
            {items.map(item => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return <Link key={item.name} href={item.href} className={`link ${isActive ? 'active' : ''}`}>{item.name}</Link>})}
        </nav>
    );
}

export default Navigation;