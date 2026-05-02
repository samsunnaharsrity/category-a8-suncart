import Banner from "@/components/banner";
import ProductData from "@/components/productData/productData";
import SummerCareTips from "@/components/summerCareTips/summerCareTips";
import TopBrands from "@/components/topBrands/topBrands";

export const metadata = {
  title: "SunCart - Home",
  description: "Summer Essentials Store",
};


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <ProductData></ProductData>
     <SummerCareTips></SummerCareTips>
     <TopBrands></TopBrands>
    </div>
  );
}
