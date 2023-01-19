//components
import About from "../../components/About"
import NavLinks from "../../components/NavLinks"

export default function Earphones(){

    return(
        <div id="earphones">
            <h1>earphones</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur saepe, illo, necessitatibus explicabo voluptatibus odit, quidem incidunt facere magnam veniam dolorum iusto libero laboriosam nam beatae sint doloribus eos temporibus.</p>
            <NavLinks isText={false}/>
            <About/>
        </div>
    )
}