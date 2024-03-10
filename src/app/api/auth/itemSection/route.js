// pages/api/auth/itemSection/route.js

import { NextApiRequest, NextApiResponse } from 'next';
const oracledb = require('oracledb');

export async function GET(req, res) {
  try {
    // Establish Oracle database connection
    const connection = await oracledb.getConnection({
        user: 'c##LAFESTO',
        password: '123456',
        connectString: 'localhost:1521/orcl'
    });

    // Fetch product details from the database
    const result = await connection.execute(
      `SELECT PRODUCT_ID, PRODUCT_NAME, PRODUCT_PRICE, PRODUCT_QUANTITY, DESCRIPTION, PRODUCT_IMG FROM PRODUCT_DETAILS`
    );

    // Release the Oracle database connection
    await connection.close();

    // Check if rows exist in the result
    if (result.rows) {
      // Send product details as JSON response
      res.status(200).json(result.rows);
      console.log("get data");
    } else {
      // Handle error if rows are not present
      console.error('Error fetching product details:', result.error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
