import Head from "next/head";

const About = () => {
    return (
        <div>
            <Head>
                <title>About Page</title>
                <meta name="description" content="About page description" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>About</div>
        </div>
    );
};

export default About;
