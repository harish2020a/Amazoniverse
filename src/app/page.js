import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductFeed from "./components/ProductFeed";

export default async function Home() {
  const products = await getData();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products;
}
