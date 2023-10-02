import React from 'react';
import picture1 from "../../trumpetArmy.jpg";
import picture2 from "../../giveBackCommunity.png";
import picture7 from "../../romareBeardenPark.jpg";
import picture4 from "../../freedomPark.png";
import picture5 from "../../music.jpg";
import picture6 from "../../downtownLocations.jpg";
import "../../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Business Partners/Machine Locations</h1>
      <h3>
        *Click on a picture to launch that Website*
      </h3>
      
        <div className='container text-center'>
          <div className='row justify-content-md-center mx-auto'>
            <div className='col-md-4'>
              <h4>Army</h4>
            <a href="https://www.goarmy.com/">
              <img src={picture1}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Give Back</h4>
            <a href="https://www.goarmy.com/">
              <img src={picture2}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Music</h4>
            <a href="https://www.goarmy.com/">
            <img src={picture5}></img>
            </a>
            </div>
          </div>
          <div className='row justify-content-md-center mx-auto'>
            <div className='col-md-4'>
            <h4>Romare Bearden Park</h4>
            <a href="https://www.google.com/search?q=Romare+Bearden+Park&source=lmns&bih=1096&biw=2213&hl=en&sa=X&ved=2ahUKEwj-reTxqNiBAxWdF2IAHTAIBM0Q0pQJKAB6BAgBEAI">
              <img src={picture7}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Freedom Park</h4>
            <a href="https://www.charlottesgotalot.com/things-to-do/outdoors-adventure/freedom-park">
              <img src={picture4}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Downtown Locations</h4>
            <a href="https://www.google.com/search?q=downtown+charlotte&sca_esv=570134643&bih=1096&biw=2213&hl=en&sxsrf=AM9HkKnM_qb3hvtFGCfatKv7mP5I8IqEVA%3A1696282833102&ei=0TgbZd3kBeWt5NoPg-mXuAo&ved=0ahUKEwidkdL9qdiBAxXlFlkFHYP0BacQ4dUDCBE&uact=5&oq=downtown+charlotte&gs_lp=Egxnd3Mtd2l6LXNlcnAiEmRvd250b3duIGNoYXJsb3R0ZTILEC4YsQMYigUYkQIyCBAAGIoFGJECMgUQLhiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyGhAuGLEDGIoFGJECGJcFGNwEGN4EGOAE2AEDSIAcUJ8PWPUZcAF4AZABAJgBbaAB4AaqAQM2LjO4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIKEAAYigUYsAMYQ8ICDhAAGOQCGNYEGLAD2AEBwgIWEC4YigUYxwEYrwEYyAMYsAMYQ9gBAsICBhAAGAcYHsICCBAAGAcYHhgKwgIHEC4YDRiABMICBxAAGA0YgATiAwQYACBBiAYBkAYTugYGCAEQARgJugYGCAIQARgIugYGCAMQARgU&sclient=gws-wiz-serp">
            <img src={picture6}></img>
            </a>
            </div>
          </div>
        </div>
    
    </div>
  );
}
