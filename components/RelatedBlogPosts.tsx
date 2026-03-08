import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  emoji: string;
  category: string;
}

interface RelatedBlogPostsProps {
  currentSlug: string;
  posts: BlogPost[];
}

export default function RelatedBlogPosts({ currentSlug, posts }: RelatedBlogPostsProps) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Yazılar</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 bg-gray-50 rounded-xl hover:bg-primary-50 hover:border-primary-200 border border-gray-100 transition-all group"
          >
            <div className="text-2xl mb-2">{post.emoji}</div>
            <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm line-clamp-2">
              {post.title}
            </h4>
            <span className="text-xs text-primary-600 mt-1 inline-block">{post.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
