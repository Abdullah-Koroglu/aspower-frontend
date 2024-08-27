import "./globals.css";
// import { Providers } from "./Providers";
import Footer from '@/components/Footer';
import Navbar from "@/components/navbar/Navbar";

// const myFont = localFont({ src: '../components/fonts/ClashDisplay-Variable.ttf' });

export const metadata = {
  title: "ASPOWER ENERJİ - Kesintisiz Güç Kaynağı, Redresör, Akü Şarj Cihazı",
  description: "ASPOWER ENERJİ - Kesintisiz Güç Kaynağı, Redresör, Akü Şarj Cihazı",
};

export default function RootLayout({ children, params }) {
  const {locale} = params
  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="stylesheet" href="https://use.typekit.net/ckc6pck.css"/>
      {/* <Providers> */}
        <body className={`min-h-[calc(100vh-10rem)] transition-all duration-500 bg-white w-full mr-auto ml-auto relative`}>
        <Navbar locale={locale}/>
          {children}
          <Footer locale={locale}/>
        </body>
      {/* </Providers> */}
    </html>
  );
}