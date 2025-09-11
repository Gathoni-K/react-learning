/*
Build a component that handles a user profile with these fields:

First Name
Last Name
Email
Age
Bio (textarea)

Requirements:

All inputs should be controlled components
Display the current form data somewhere on screen (so you can see it updating)
Use ONE handler function for all inputs
Use the spread operator pattern discussed

*/
import { useState } from "react";

export default function UserProfile(){
    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        age : "",
        bio : "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        //extracts the values from our input fields
        setUser({...user, [name]: value})
    }

    return (
        <div>
            <input
            name="firstName"
            value={user.firstName}
            type="text"
            onChange={handleChange}
            />
            <input
            name="lastName"
            value={user.lastName}
            type="text"
            onChange={handleChange}
            />
            <input
            name="email"
            value={user.email}
            type="email"
            onChange={handleChange}
            />
            <input
            name="age"
            value={user.age}
            type="text"
            onChange={handleChange}
            />
            <textarea
            name="bio"
            value={user.bio}
            type="textarea"
            onChange={handleChange}
            />
        </div>
    )


}