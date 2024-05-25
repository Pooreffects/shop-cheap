import Link from 'next/link';

interface CTAButtonTypes {
  title: string;
  link: string;
  className: string;
}

export default function CTAButton({ title, className, link }: CTAButtonTypes) {
  return (
    <Link href={link} className={className}>
      {title}
    </Link>
  );
}
