// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline text-blue-400">
//       Hello world!
//     </h1>
//   )
// }

const App = () => (
  <main className="relative">
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b">
      Hero
    </section>
    <section className="padding">
      Popular Products
    </section>
    <section className="padding">
      Super Quality
    </section>
    <section className="padding-x py-10">
      Services
    </section>
    <section className="padding">
      Special Offers
    </section>
    <section className="padding bg-pale-blue">
      Customer Reviews
    </section>
    <section className="padding-x sm:py-32 py-16 w-full bg-red-400">
      {/* note that sm:py-32 is like for at least sm, it will be 32 if not it will be 16 */}
      Subscribe
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      Footer
    </section>
  </main>
)

export default App