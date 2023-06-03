import React from 'react'
import "./Home.css"
import searchIcon from "../assets/search.png"

const Home = () => {
  return (
    <div className='home-cont-parent'>
        <div className='d-flex flex-column align-items-center home-cont'>
        <div><h1 className='display-4 main-head'><b>BRICKFOLIO</b> - A LOCAL EXPERT</h1></div>
        <div className='d-flex flex-column home-btn-opts-cont'>
            <div className='d-flex justify-content-center home-btn-opts'>
                <div><button className='home-btns'>Investment</button></div>
                <div><button className='home-btns'>Commercial</button></div>
                <div><button className='home-btns'>Resindential</button></div>
                <div><button className='home-btns'>Managed Offices</button></div>
            </div>
            <div className='d-flex home-search-opt-cont'>
                <div className='select-opt-cont'>
                    <div>
                    <select name="" id="" placeholder='Select Area' className='home-select'>
                        <option>Ajantha Nagar</option>
                        <option>Akurdi</option>
                        <option>Ambegaon Budruk</option>
                    </select>
                    </div>

                    <div>
                    <select name="" id="" placeholder='Select Area' className='home-select'>
                        <option>Ajantha Nagar</option>
                        <option>Akurdi</option>
                        <option>Ambegaon Budruk</option>
                    </select>
                    </div>

                    <div>
                    <select name="" id="" placeholder='Select Area' className='home-select'>
                        <option>Ajantha Nagar</option>
                        <option>Akurdi</option>
                        <option>Ambegaon Budruk</option>
                    </select>
                    </div>

                    <div><button className='home-search-btn'><i className="fa fa-search"></i></button></div>
                </div>
                <div>
                    <button className='home-btns'>Post Your Property</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home