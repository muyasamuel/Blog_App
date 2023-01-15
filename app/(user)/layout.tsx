import Header from '../../components/Header';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
    
      <body>
         <Header />
       {/* banner */}
        {children}</body>
    </html>
  )
}
