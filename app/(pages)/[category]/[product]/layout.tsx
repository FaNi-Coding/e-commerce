import SimpleHeader from '@/components/Layout/Header/SimpleHeader';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SimpleHeader />
      <main>{children}</main>
    </>
  );
}
