/*
__RENDERING COMPONENTS INSIDE A LOOP.
-Declare a component taking props: 'name' and 'role'.
-Inside another component, 'Team', declare an array of objects where each object
represents a team member with their name and role.
-Instead of rendering the data directly, use the array and map over it to render a ProfileCard component for each team member.
-Each ProfileCard should display the person’s name in a heading and their role in a paragraph.
-Use a unique key for each ProfileCard.

-In this case, the Teams component is our parent as it is where the data is stored.
-Teams will render multiple ProfileCards and passes data to each.

*/

export default function ProfileCard({name, role}){
    return (
        <div>
            <h3>{name}</h3>
            {/* will display the name */}
            <p>{role}</p>
            {/* will display the role */}
        </div>
    )

}