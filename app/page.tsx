import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About | Blog",
    description: "Generated by create next app",
};
export default function Home() {
    return (
        <>
            <h3>Welcome to NextJS</h3>
            <div>Main page</div>
        </>
    );
}