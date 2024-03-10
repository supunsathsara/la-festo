// 'E:\Web\la-festo\src\app\api\auth\product\route.js'
import { query } from "@/lib/db";
import { notFound } from "next/router";
import { useState, useEffect } from 'react';

export default function Page({ params }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const products = await query({
        query: "SELECT CUS_NAME FROM CUSTOMER_DETAILS;",
        values: [params.slug],
      });
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. You can add content here to describe your website.</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((item, index) => (
            <li key={index}>{item.CUS_NAME}</li>
          ))}
        </ul>
      )}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
