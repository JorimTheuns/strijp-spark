import StaticWreathHeader from "@components/StaticWreathHeader";
import StaticWreathFooter from "@components/StaticWreathFooter";
import { NotionRenderer } from "react-notion";

import { getAllPosts } from "./blog";
import AuthorCard from "@components/authorCard";

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
    },
  };
}

export default ({ post, blocks }) => (
  <div className="">
    <StaticWreathHeader></StaticWreathHeader>
    <div className="p-4 mx-auto max-w-[1000px]">
      <p className="notion-h1">{post.title}</p>
      <p className="notion-h1">{post.date}</p>
      <AuthorCard authors={post.Author}></AuthorCard>
    </div>
    <div className="p-4 mx-auto max-w-[1000px]">
      <NotionRenderer blockMap={blocks} />
    </div>
    <StaticWreathFooter></StaticWreathFooter>
  </div>
);

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: false,
  };
}

function getDate(timeStamp) {
  const d = new Date(timeStamp);
  let text = d.toString();
  return text;
}
