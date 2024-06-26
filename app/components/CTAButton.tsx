import Link from 'next/link';

interface CTAButtonTypes {
  className: string;
  title: string;
  link: string;
}

export default function CTAButton({ title, className, link }: CTAButtonTypes) {
  return (
    <Link href={link} className={className}>
      {title}
    </Link>
  );
}
