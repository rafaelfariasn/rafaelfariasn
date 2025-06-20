import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
type Params = Promise<{ slug: string }>;

export default async function BlogPostPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="prose prose-lg max-w-xl mx-auto py-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <p>{post.content}</p>
        </article>
    );
}