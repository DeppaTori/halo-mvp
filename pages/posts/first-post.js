import Link from 'next/link';
import { getSortedPostsData } from './../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
}



const FirstPost = ({allPostsData})=>{
    return (
        <>
            <section>
                <h2>Blog</h2>
                <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                    </li>
                ))}
                </ul>
            </section>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}

export default FirstPost;