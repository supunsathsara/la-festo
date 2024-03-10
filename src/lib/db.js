import oracledb from "oracledb";

export async function query({ query, values = [] }) {
  // Establish Oracle database connection
  const connection = await oracledb.getConnection({
    user: 'c##LAFESTO',
    password: '123456',
    connectString: 'localhost:1521/orcl'
  });

  try {
    const result = await connection.execute(query, values, );
    await connection.close();
    return result.rows; // Assuming you want to return rows only
  } catch (error) {
    console.error(error); // Log the error here
    //throw Error(error.message);
  }
}
