import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div>Hello World</div>
            <div>
                <Link href="about">About</Link>
            </div>
        </main>
    );
}
