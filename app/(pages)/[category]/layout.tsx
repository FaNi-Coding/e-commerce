import CategoryHeader from '@/components/Layout/Header/CategoryHeader';

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
