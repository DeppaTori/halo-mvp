import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

const Post = ({ postData })=>{
    return (
        <>
            <h1>{postData.title}</h1>
            <p>
           
            <br />
            {postData.id}
            <br />
            {postData.date}
            </p>
            <h2>
                <Link href="/home">
                <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}

export default Post;