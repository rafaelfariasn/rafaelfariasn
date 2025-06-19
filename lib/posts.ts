export type Post = {
  date: string,
  title: string;
  slug: string;
  content: string;
};

export const posts: Post[] = [
  {
    date: "2025-06-18",
    title: "Primeiro post",
    slug: "primeiro-post",
    content: "Este é o conteúdo do meu primeiro post.",
  },
  {
    date: "2025-06-19",
    title: "Segundo post",
    slug: "segundo-post",
    content: "Este é o conteúdo do segundo post técnico.",
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}