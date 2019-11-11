import React from "react"

function Nav(){
  return(
    <nav>
      <div style={{"display": "flex", "justifyContent": "flex-start", "height": "50px", "backgroundColor": "white", "color": "white"}}>
        <a href="#" style={{"textDecoration": "none", "color": "antiquewhite", "padding": "1rem"}}>Home</a>
        <a href="#" style={{"textSize": "bold", "textDecoration": "none", "color": "antiquewhite", "padding": "1rem"}}>About</a>
        <a href="#" style={{"textDecoration": "none", "color": "antiquewhite", "padding": "1rem"}}>Contact</a>
      </div>
    </nav>
  )
}

export default Nav
