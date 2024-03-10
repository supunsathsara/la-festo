// pages/api/auth/shop.js
import { NextResponse } from 'next/server';
const oracledb = require('oracledb');

async function executeQuery(connection, query) {
  try {
    const result = await connection.execute(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error; // Rethrow the error for higher-level handling
  }
}

export async function GET(request, response) {
  try {
    // Establish Oracle database connection
    const connection = await oracledb.getConnection({
      user: 'c##LAFESTO',
      password: '123456',
      connectString: 'localhost:1521/orcl'
    });

    // SQL query to fetch product details
    const query = "SELECT PRODUCT_ID, PRODUCT_NAME, PRODUCT_PRICE, PRODUCT_QUANTITY, PRODUCT_IMG FROM PRODUCT_DETAILS";

    // Execute the SQL query
    const rows = await executeQuery(connection, query);

    // Release the connection
    await connection.close();

    // Map rows to desired format
    const products = rows.map(row => ({
      id: row[0],
      name: row[1],
      price: row[2],
      //description: row[4],
      image: row[4]
    }));

    console.log('Products fetched successfully');
    console.log(products);
    console.log(JSON.stringify(products));
    console.log('asdf');
    console.log(Array.isArray(products));

    // Return JSON response
    return NextResponse.json(products);

   
  } catch (error) {
    console.error('Error fetching product details:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
