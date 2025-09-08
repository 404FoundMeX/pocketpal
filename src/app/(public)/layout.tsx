import NavBar from "~/components/public/NavBar";
import Footer from "~/components/public/Footer";
import BannerComponent from "~/components/banner";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <BannerComponent />
      {children}
      <Footer />
    </>
  );
}
