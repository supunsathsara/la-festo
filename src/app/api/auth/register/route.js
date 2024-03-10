import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
const oracledb = require('oracledb');

async function executeProcedure(connection, procedure, params) {
  try {
    const result = await connection.execute(procedure, params);
    return result;
  } catch (error) {
    console.error('Error executing procedure:', error);
    throw error; // Rethrow the error for higher-level handling
  }
}

export async function POST(request, response) {
  try {
    const { name, address, tele, email, password } = await request.json();

    // Validate email and password
    console.log({ name, address, tele, email, password });
    console.log("inserted");

    const hashedPassword = await hash(password, 5);

    // Establish Oracle database connection
    const connection = await oracledb.getConnection({
      user: 'c##LAFESTO',
      password: '123456',
      connectString: 'localhost:1521/orcl'
    });

    // Call the PL/SQL procedure
    const plsqlProcedure = `
    DECLARE
        v_cusId NUMBER;
    BEGIN
        INSERTCUSTOMERS(:name, :address, :tele, :email, :password, v_cusId);
        :insertId := v_cusId;
    EXCEPTION
      WHEN DUP_VAL_ON_INDEX THEN
        raise_application_error(-20001, 'Email is already in use.');
    END;
    `;

    // Execute the PL/SQL procedure
    const result = await executeProcedure(connection, plsqlProcedure, {
      name: { val: name },
      address: { val: address },
      tele: { val: tele },
      email: { val: email },
      password: { val: password },
      insertId: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
    });

    // Release the connection
    await connection.close();

    console.log(result);

    const insertId = result.outBinds.insertId[0];
    const affectedRows = 1; // Assuming one row is affected by the procedure

    console.log({ insertId, affectedRows });

    return NextResponse.json({ message: 'success', insertId, affectedRows });
  } catch (error) {
    console.error('Error inserting user:', error);
    if (error.message.includes('Email is already in use.')) {
      return NextResponse.json({ message: 'error', error: 'Email is already in use.' });
    }
    return NextResponse.json({ message: 'error', error: 'An unexpected error occurred.' });
  }
}
