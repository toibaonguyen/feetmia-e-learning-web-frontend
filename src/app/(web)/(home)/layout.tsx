import Footer from '@/components/Footer/presentation';
import Header from '@/components/Header';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header 
      />
      <main>
        {children}
      </main>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
