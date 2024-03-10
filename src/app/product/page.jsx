// import { query } from "@/lib/db";
// import Image from "next/image";
// import { getServerSession } from 'next-auth';
// import { notFound } from "next/navigation";

// export default async function ProductPage({ params }) {

//     const products = await query({
//         query: "SELECT CUS_NAME FROM CUSTOMER_DETAILS WHERE SOME_COLUMN = :1;",
//         values: [params.slug], // Assuming params.slug is used as a bind parameter
//     });

//     const product = products[0];

//     if (!product) return notFound();

//    // const session = await getServerSession();

//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is the about page. You can add content here to describe your website.</p>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {product.map((customer, index) => (
//             <li key={index}>{customer.CUS_NAME}</li>
//           ))}
//         </ul>
//       )}
     
//     </div>
//   );
// }

// --------------------------------------------------


import { query } from "@/lib/db";
import Image from "next/image";
import { getServerSession } from 'next-auth';
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {

    const products = await query({
        query: "SELECT CUS_NAME FROM CUSTOMER_DETAILS;",
        values: [params.slug], // Assuming params.slug is used as a bind parameter
    });

    if (!products || products.length === 0) return notFound();

    const product = products[0];

    // const session = await getServerSession();

    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page. You can add content here to describe your website.</p>
            <ul>
                {product.map((customer, index) => (
                    <li key={index}>{customer.CUS_NAME}</li>
                ))}
            </ul>
        </div>
    );
}
