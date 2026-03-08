import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  href?: string;
}

export default function ProductCard({ name, description, image, href }: ProductCardProps) {
  const content = (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
