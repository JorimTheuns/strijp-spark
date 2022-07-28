import Link from "next/link";

const NOTION_BLOG_ID = "e9a945d27e764fc3acc0f749ea7a19a7";

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

function HomePage({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <a>
          <Link href="/[slug]" as={`/${post.slug}`}>
            <div>{post.title}</div>
          </Link>
        </a>
      ))}
    </div>
  );
}

export default HomePage;
