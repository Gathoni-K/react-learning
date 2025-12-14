# React Query.

-An asynchronous state management library.
-Simplifies data-fetching code and handles complex requirements.
-Handles all the server data stuff better.
-By server data we mean any data we may need to fetch externally: from APIs, from databases, any data not originating from our app.
-Used when the server already has our data.



## Installation & Usage:
Use : 'npm i @tanstack/react-query'
2.Create a provide that will wrap our entire app.
 `import {QueryClient, QueryClientProvider} from "@tanstack/react-query"`

    `<QueryClientProvider>
    <App />
    <QueryClientProvider>
    `
-This is done in our main.tsx file.
 
