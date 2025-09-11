const header = { color: "blue", fontSize: "140px"};
//define the object containing our styles then call it in our element

export default function InlineStyling() {
    return (
        <div>
            {/* <h1 style={{color: "blue", fontSIze:"140px"}}>Inline component</h1> */}
            <h1 style={header}>Inline COmponent</h1>
        </div>
    )
}