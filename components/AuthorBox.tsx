import Image from 'next/image';

interface AuthorBoxProps {
  name?: string;
  role?: string;
  image?: string;
  bio?: string;
}

export default function AuthorBox({
  name = 'Anka Veteriner Kliniği',
  role = 'Veteriner Sağlık Ekibi',
  image = '/images/logo/anka-logo.jpeg',
  bio = 'Batıkent Anka Veteriner Kliniği uzman hekimleri tarafından hazırlanan, evcil hayvan sağlığı ve bakımı hakkında bilgilendirici içerikler.',
}: AuthorBoxProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 border border-gray-100">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-200">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center sm:text-left">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-primary-600 mb-1">{role}</p>
        <p className="text-sm text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
