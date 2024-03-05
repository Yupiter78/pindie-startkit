import Banner from "@/components/banner/banner";
import Promo from "@/components/promo/promo";
import PopularCardsList from "@/components/cardList/PopularCardsList";
import NewCardsList from "@/components/cardList/NewCardsList";

export default function Home() {
  return (
      <main className="main">
        <Banner/>
          <PopularCardsList/>
          <NewCardsList/>
        <Promo/>
      </main>
  )
}