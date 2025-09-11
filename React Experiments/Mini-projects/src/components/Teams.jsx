//our parent component responsible of managing and distributing data.
import ProfileCard from './ProfileCard';
//importing our child component

//This is the component rendered in our 'App.jsx', 

export default function Teams(){
    const akatsuki = [
        {name: "Uchiha Itachi", role: "The Genius"},
        {name: "Nagato(Pain)", role:"The Leader"},
        {name: "Konan", role: "Vice-President"},
        {name: "Kakuzu", role: "Treasurer"},
        {name: "Sasori", role: "Master-Puppeteer"},
    ];

    return(
        <div>
            {akatsuki.map(member => (
                // loops through every item of our array, able to create a profile card
                //for each member.
                <ProfileCard 
                key={member.name}
                name={member.name}
                role={member.role}
                />
            ))}
        </div>
    );
}