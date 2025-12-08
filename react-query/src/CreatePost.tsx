import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { createPost } from "./api/posts";

export function CreatePost(setCurrentPage){
    const titleRef = useRef();
    const bodyRef = useRef();
    const createPostMutation = useMutation({
        // mutationFn: (variables) => {
        //     createPost(variables)
        // },
        mutationFn: createPost,
        onSuccess: data =>{
            setCurrentPage(<Post id={data.id} />)
        }
        // onSuccess: (data, variables, context),
        // // variables in this case ware whatever we pass to our mutationFn.
        // onError: (error, variables, context),
        // onMutate: (variables) => {
        //     return {h1: "Bye"}
        //     // context is whatever we return in this function
        // }
        // the property above will run before 'm utationFn'
    })

    // createPostMutation.status === "idle"

    createPostMutation.mutateAsync().then(()=> {

    })

    function handleSubmit(e){
        e.preventDefault()
        createPostMutation.mutate({
            title: titleRef.current.value,
            body: bodyRef.current.value,
        })
    }

    return(
        <div>
            {createPostMutation.isError && JSON.stringify(error)}
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" ref={titleRef} />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input id="body" ref={bodyRef} />
                </div>
                <button disabled={createPostMutation.isLoading}>
                    {createPostMutation.isLoading ? "Loading..." : "Create"}
                </button>
            </form>
        </div>
    )
}