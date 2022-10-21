/*
--------------------------------------------------
                BASIC CONTEXT API SETUP
-------------------------------------------------
1. Context Api: share auth state and with outher componants (accrrose the application)
2. Creat an UserContext
3. ContextProvider with passed childreen
4. set the UserContext in the index.js 
5. to consume the context: export the AuthContext the UserContext
6. Now the Header or Home () and anywhere else): use useContext hook to get the info in the context
*/

/*
----------------------------------------
            AUTH INTEREGATION
--------------------------------------
1. use gatAuth by passing the app from firebase config
2. create a function named createUser to return createUserWithEmailAndPassword


*/