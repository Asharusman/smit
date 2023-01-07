import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div>
      <nav class="navbar background h-nav-resp">
        <ul class="navlist v-class-resp">
            <div class="logo"><img src="./images/5.png" alt="logo"/></div>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        <div class="right-nav v-class-resp">
            <input type="text" name="search" id="search"/>
            <button class="btn btn-sm">Search</button>
        </div>
        <div class="burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </nav>
    <section class="background firstsection">
        <div class="mainbox">
            <div class="firsthalf">
                <p class="textbig">SMIT</p>
                <p class="textsmallS">Saylani Mass IT Training Institute</p>
                {/* <div class="button">
                    <button class="btn">add</button>
                    <button class="btn">subscribe</button>
                </div> */}
            </div>
            <div class="secondhalf">
                <img src="./images/5.png" alt=""/>
            </div>
        </div>
    </section>
    <section class="secondsec">
        <div class="para">
            <p class="textbig">Web and Mobile App Development</p>
                <p class="textsmallS">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates facilis,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum magni tempora et repellat saepe. Pariatur repudiandae soluta, ab odio expedita eos et labore laboriosam, tempora ratione facilis, dolorem eaque minima.</p>
        </div>
        <div class="thumbnail"><img src="./images/1.jpg" alt=""/></div>
    </section>
    <section class="secondsec left">
        <div class="para">
            <p class="textbig">Web 3.0 and Metaverse</p>
                <p class="textsmallS">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates facilis,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum magni tempora et repellat saepe. Pariatur repudiandae soluta, ab odio expedita eos et labore laboriosam, tempora ratione facilis, dolorem eaque minima.</p>
        </div>
        <div class="thumbnail"><img src="./images/1.jpg" alt=""/></div>
    </section>
    <section class="secondsec">
        <div class="para">
            <p class="textbig">Mobile Repairing</p>
                <p class="textsmallS">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates facilis,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum magni tempora et repellat saepe. Pariatur repudiandae soluta, ab odio expedita eos et labore laboriosam, tempora ratione facilis, dolorem eaque minima.</p>
        </div>
        <div class="thumbnail"><img src="./images/1.jpg" alt=""/></div>
    </section>
    <section class="contact">
        <h1 class="text-center">Contact Us</h1>
        <div class="form">
            <input class="form-input" type="text" name="name" id="name" placeholder="enter name"/>
            <input class="form-input" type="text" name="number" id="number" placeholder="enter number"/>
            <input class="form-input" type="email" name="email" id="email" placeholder="enter email"/>
            <textarea class="form-input" name="text" id="text" cols="30" rows="10" placeholder="enter anything"></textarea>
            <button class="btn btn-sm btn-dark">submit</button>
        </div>
    </section>
    <footer class="background">
        <p class="text-footer">
            Copyright &copy; 2030 - All Rights Reserved
        </p>
    </footer>
    </div>
  )
}

export default Home
