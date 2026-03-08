'use client';

interface BlogFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function BlogFilter({ categories, active, onChange }: BlogFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active === cat
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
