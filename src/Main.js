import React from "react";
import "./Main.css";
import Product from "./Product";
import cr1 from "./Asset/Cr-1.jpg";
import cr2 from "./Asset/Cr-2.jpg";
import cr3 from "./Asset/Cr-3.jpg";
import cr4 from "./Asset/Cr-4.jpg";
import cr5 from "./Asset/Cr-5.jpg";
import cr6 from "./Asset/Cr-6.jpg";
import cr7 from "./Asset/Cr-7.jpg";
import Slide from "./Slide";
import ProductTwo from "./ProductTwo";
import mob1 from './Asset/11PRO.jpg'
import mob2 from './Asset/Z6.jpg'
import mob3 from './Asset/A74.jpg'
import mob4 from './Asset/F21.jpg'
import mob5 from './Asset/watch.jpg'
import mob6 from './Asset/microvaes.jpg'
import mob7 from './Asset/earbuds.jpg'
import mob8 from './Asset/refrigerator.jpg'

export default function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={cr1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cr2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cr3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cr4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cr5} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cr6} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cr7} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="product-row">
        <Product id="1" qty={Number(1)} img={mob1} title={'Redmi Note 11 pro'} desc={"Redmi Note 11 Pro + 5G (Stealth Black, 6GB RAM, 128GB Storage) | 67W Turbo Charge | 120Hz Super AMOLED Display | Additional Exchange Offers | Charger Included"} price={Number(11500)} />
        <Product id="2" qty={Number(1)} img={mob2} title={'IQOO Z6'} desc={"iQOO Z6 Pro 5G (Phantom Dusk, 6GB RAM, 128GB Storage) | Snapdragon 778G 5G | 66W FlashCharge | 1300 nits Peak Brightness | HDR10+"} price={Number(24999)} />
        <Product id="3" qty={Number(1)} img={mob3} title={'OPPO A74'} desc={"OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"} price={Number(23999)} />
        <Product id="4" qty={Number(1)} img={mob4} title={'OPPO F21 Pro'} desc={"Amazon's Choice Oppo F21 Pro (Sunset Orange, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers"} price={Number(14999)} />
        
        </div>
        <div className="slideimg">
          <Slide/>
        </div>
        <div className="product-row-2">
        <ProductTwo id="5"  qty={Number(1)} img={mob5} title={'Watch'} desc={"Noise Pulse Go Buzz Smart Watch Bluetooth Calling with 1.69 Display, 550 NITS, 150+ Cloud Watch Face, SPo2, Heart Rate Tracking, 100 Sports Mode with Auto Detection, Longer Battery (Jet Black)"} price={Number(2599)} />
        <ProductTwo id="6"  qty={Number(1)} img={mob6} title={'Microwave'} desc={"Godrej 25 L Solo Microwave Oven (GMX 725 SP1 TM Mirror, Multi distribution heat system), Black"} price={Number(24999)} />
        <ProductTwo id="7"  qty={Number(1)} img={mob7} title={'Amazon Basics'} desc={"Amazon Basics Bluetooth 5.0 Truly Wireless in Ear Earbuds, Up to 38 Hours Playtime, IPX-5 Rated, Type-C Charging Case, Touch Controls, Voice Assistant, Optional Single Side Use for Phone Calls, Black"} price={Number(4999)} />
        <ProductTwo id="8"  qty={Number(1)} img={mob8} title={'Refrigerator'} desc={"Haier 278 L 3 Star Double Door Frost Free Refrigerator, Twin Inverter Technology (HEF-27TMS, Moon Silver,Convertible)"} price={Number(23999)} />
        
        
        </div>


      </div>  
    </div>
  );
}
