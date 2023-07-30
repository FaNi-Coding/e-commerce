import SimpleHeader from '@/components/Layout/Header/SimpleHeader';

import '@/app/globals.css';

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
