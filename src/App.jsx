import { useState, useEffect } from "react";

const App = () => {
  const url = "https://api.escuelajs.co/api/v1/products";

  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      // console.log(data);
    } catch (err) {
      console.log("something went wrong", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // fetch(url)
  // .then((res) => res.json())
  // .then((data) => console.log(data));

  return (
    <main>
      <h1 className="flex items-center justify-center text-5xl font-semibold underline decoration-dashed">
        PRODUCTS
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-12 m-4">
        {products.map((product) => (
          <div className="flex items-center justify-center flex-col h-[28rem] w-[20rem] bg-white gap-2 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
            <div>
              <img
                className="h-[18rem] w-[15rem]"
                key={product.id}
                src={product.images}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center flex-col">
              <h1
                className="flex items-center justify-center text-xl font-semibold"
                key={product.id}
              >
                {product.title.slice(0, 20)}
              </h1>
              <span
                className="flex items-center justify-center font-bold text-xl"
                key={product.id}
              >
                ₹{product.price}
              </span>
              <p
                className="text-lg flex items-center justify-center"
                key={product.id}
              >
                {product.description.slice(0, 30)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
