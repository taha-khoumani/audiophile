//react-router
import { Link,NavLink } from "react-router-dom"

//redux
import {useDispatch} from "react-redux"

//reducers
import { toggleMenu} from "../features/nav/navSlice"

//images
import arrow from "../imgs/icon-arrow-right.svg"
import speakersCat from "../imgs/speakers-img.png"
import earphonesCat from "../imgs/earphones-img.png"
import headphonesCat from "../imgs/headphones-img.png"

export default function NavLinks(props){
    
    const {isText} = props
    const dispatch = useDispatch()

    return(
        <div className="navlinks">
            { 
                isText 
                ?
                // <div className="navlinks-text">
                //     <NavLink to="audiophile">HOME</NavLink>
                //     <NavLink to="audiophile/headphones" >HEADPHONES</NavLink>
                //     <NavLink to="audiophile/speakers" >SPEAKERS</NavLink>
                //     <NavLink to="audiophile/earphones" >EARPHONES</NavLink>
                // </div>
                <div className="navlinks-text">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="headphones" >HEADPHONES</NavLink>
                    <NavLink to="speakers" >SPEAKERS</NavLink>
                    <NavLink to="earphones" >EARPHONES</NavLink>
                </div>
                :
                <div 
                    id="navlink-img-container"
                    onClick={()=>{
                        dispatch(toggleMenu(false))
                    }}
                >
                    <div 
                        className={`navlinks-img ${props.class ? props.class : null}`}
                        onClick={(e)=>{
                            e.stopPropagation()
                        }}
                    >
                        <div className="category">
                            <img className="category-img" src={headphonesCat} alt="headphones-cat" />
                            <p>HEADPHONES</p>
                            <Link 
                                to="audiophile/headphones" 
                                style={{textDecoration: "none",}}
                                onClick={()=>{
                                    document.body.style.position = "static"
                                    dispatch(toggleMenu(false))
                                }}
                            >
                                <div className="shop">
                                    <p>SHOP</p>
                                    <img src={arrow} alt="shop-arrow" />
                                </div>
                            </Link>
                        </div>
                        <div className="category">
                            <img className="category-img" src={speakersCat} alt="speakers-cat" />
                            <p>SPEAKERS</p>
                            <Link 
                                to="audiophile/speakers" 
                                style={{textDecoration: "none",}}
                                onClick={()=>{
                                    document.body.style.position = "static"
                                    dispatch(toggleMenu(false))
                                }}
                            >
                                <div className="shop">
                                    <p>SHOP</p>
                                    <img src={arrow} alt="shop-arrow" />
                                </div>
                            </Link>
                        </div>
                        <div className="category">
                            <img className="category-img" src={earphonesCat} alt="earphones-cat" />
                            <p>EARPHONES</p>
                            <Link 
                                to="audiophile/earphones" 
                                style={{textDecoration: "none",}}
                                onClick={()=>{
                                    document.body.style.position = "static"
                                    dispatch(toggleMenu(false))
                                }}
                            >
                                <div className="shop">
                                    <p>SHOP</p>
                                    <img src={arrow} alt="shop-arrow" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}