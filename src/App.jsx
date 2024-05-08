// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline text-blue-400">
//       Hello world!
//     </h1>
//   )
// }
import { Hero, Footer, CustomerReviews, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections"
import Nav from "./components/Nav"

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full bg-red-400">
      {/* note that sm:py-32 is like for at least sm, it will be 32 if not it will be 16 */}
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App