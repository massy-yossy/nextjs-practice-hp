
import Layout from "../components/Layout";
import { Posts } from "../components/Posts";
import { getAllPostDate } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getAllPostDate();
  return {
    props: { posts },
  };
}

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Posts key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;
