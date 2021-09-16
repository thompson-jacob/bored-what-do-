import React, {useState,useEffect} from "react"

const Bored = () => {
  const [todo, setTodo] = useState("")

  useEffect(() => {
    removeBoredom()
  }, [])

 const removeBoredom = () => {
    fetch("http://www.boredapi.com/api/activity/").then(response =>
    response.json())
    .then(data => {
    setTodo(data) 
    })
 }
return (
  <> 
  <p> Feeling Bored: try this! <br /> {todo === "" ? ("") : (todo.activity) }</p>
   <span>  Click for a new idea 
    <button onClick={removeBoredom}>Random</button>
    </span>
  
  </>
)

}

export default Bored