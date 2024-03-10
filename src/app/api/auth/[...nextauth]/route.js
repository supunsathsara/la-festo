import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const oracledb = require('oracledb');

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/Login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.credentials = token.credentials;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          // Establish Oracle database connection
          const connection = await oracledb.getConnection({
            user: 'c##LAFESTO',
            password: '123456',
            connectString: 'localhost:1521/orcl'
          });
      
          // Call the ValidateUserLogin procedure
          const result = await connection.execute(
            `DECLARE
                v_success BOOLEAN;
                v_message VARCHAR2(100);
             BEGIN
                ValidateUserLogin(
                    p_email => '${credentials.email}',
                    p_password => '${credentials.password}',
                    p_success => v_success,
                    p_message => v_message
                );
      
                IF v_success THEN
                    :p_success := 1;
                    :p_message := v_message;
                ELSE
                    :p_success := 0;
                    :p_message := v_message;
                END IF;
             END;`,
            {
              p_success: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
              p_message: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
            }
          );
      
          // Release the Oracle database connection
          await connection.close();
      
          const p_success = result.outBinds.p_success;
          const p_message = result.outBinds.p_message;
          console.log(p_message);
          console.log(p_success);
          // Check if the login was successful
          if (p_success === 1) {
        
            const user = { 
              id: credentials.id,
              name: credentials.name,
              email: credentials.email,
            };
            console.log(credentials.email);
            return user;
          } else {
            console.log('Login failed:', p_message);
            return null;
          }
        } catch (error) {
          console.error('Error authenticating user:', error);
          return null;
        }
      }
      ,
    }),
  ],
});

export { handler as GET, handler as POST };
