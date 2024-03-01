import React, {ReactNode} from "react";
import Link from "next/link";

export default function AboutLayout({
                                        children,
                                    }: {
    children: ReactNode;
}) {
    return <div>
        <h3>About us</h3>
        <ul>
            <li>
                <Link href='/about'>About us</Link>
            </li>
            <li>
                <Link href='/about/contacts'>Contacts</Link>
            </li>
            <li>
                <Link href='/about/team'>Team</Link>
            </li>
        </ul>
        {children}
    </div>
}