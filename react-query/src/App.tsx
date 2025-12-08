
// import './App.css'
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
// // allow us to get and change data
// // custom hooks
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



// const POSTS = [
//   {id: 1, title: "Post 1"},
//   {id: 2, title: "Post 2"},
// ]

/*
/posts -> ["posts"]
-Fetches all posts, will refetch every time "posts" is invalidated.
/posts/1 -> ["posts", post.id]
-fetches a single post with id 1.
/posts?authorId=1 -> ["posts", {authorId: 1}]
-fetches posts by a specific author.
/posts/2/comments -> ["posts", post.id, "comments"]
-fetches comments for post 2

-Are examples of react query keys.
-Every useQuery needs a unique key to identify its cached data, know when to invalidate/refetch.
-Is usually an array, and can contain strings, numbers, objects.
-React query uses this key to store and look up data in the cache.
-Arrays are preferred because they make nested caching easy.


*/

// function App() {
//   const queryClient = useQueryClient();
//   // returns what we had earlier created

//   const postsQuery = useQuery({
// // takes in an object
//     queryKey: ["posts"],
//     // uniquely identifies a query, always takes an array
//     queryFn: (obj) => wait(1000).then(()=> {
//       console.log(obj),
//       [...POSTS])
//     }
//     // function needed to run so that we can get our data.
//     // always expects a promise.
//     // Our function returns all the posts we have after 1 second
//   })
//   postsQuery.status === ""
//   // '.status' property can be used to check for error and loading states.
//   if(postsQuery.isLoading) return <h1>Loading....</h1>
//   //if our data is loading, it shows the above message
//   if (postsQuery.isError) {
//   return <pre>{JSON.stringify(postsQuery.error)}</pre>
//   // the pre tag stands for preformatted text and anything inside this tag is displayed exactly as typed.
//   }

//   const newPostMutation = useMutation({
//     mutationFn: title => {
//       return wait(1000).then(()=>
//       POSTS.push({ id: crypto.randomUUID(), title })
//     )
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["posts"]);
//       // whenever we successfully add a post, then our old query gets invalidated.
//       // the line above makes it such that when a new post is added React Query automatically refreshes the post list.
//     }
//   })
  
  /*
  taking our post array where we add another item with a randomly generated id.
  -Can take in any data needed.
   */


//   return (
//     <div>
//       {postsQuery.data.map(post => (
//         <div key={post.id}>
//           {post.title}
//         </div>
//       ))}
      
//       {/* <button disabled={newPostMutation.isLoading} onClick={()=> newPostMutation.mutate("New Post")}>
//         Add New
//       </button> */}

//     </div>
//   )
// }
// function wait(duration){
//   return new Promise(resolve => setTimeout(resolve, duration))
// }
// // the above is a query, getting data from somewhere.

// export default App

import { useState } from "react";
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostLists2";

export default function App(){
  const [currentPage, setCurrentPage ] = useState (<PostsList1 />);
  // above line sets our default page to PostsList1.
  return (
    <div>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>

      <button onClick={()=> setCurrentPage (<PostsList2 />)}>
        Posts List 2
      </button>
      
      <button onClick={() => setCurrentPage(<CreatePost />)}>
        New Posts
      </button>
      <br />
      {currentPage}
    </div>
  )
}