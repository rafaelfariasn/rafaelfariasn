import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
     <ul className="list-none space-y-4 p-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </a>
          <p className="text-gray-500 text-sm">{post.date}</p>
        </li>
      ))}
    </ul>
    </main>
  );
}