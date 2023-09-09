import Link from "next/link";

export const Posts = ({ post }) => {
  return (
    <div>
      <Link href={`posts/${post.id}`}>
        <a>
          <span>{post.id}</span>
          {" : "}
          <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
            {post.title}
          </span>
        </a>
      </Link>
    </div>
  );
};
