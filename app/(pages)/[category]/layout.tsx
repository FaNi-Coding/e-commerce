import CategoryHeader from '@/components/Layout/Header/CategoryHeader';

import '@/app/globals.css';

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CategoryHeader />
      <main>{children}</main>
    </>
  );
}
