/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>    
 *          <h2> I am h2 Tag </h2> 
 *      </div>
 * </div>
 * 
 */


const heading = React.createElement("h1",
    { id: "heading", xyz: "abc" },
    "Hello World From React!"
); // This is the core react functionality and react.development.js src is resposible for this.

//creating root
const root = ReactDOM.createRoot(document.getElementById("root")); //Reactdom.developmentjs src is resposible for this.

//rendering in root
root.render(heading);