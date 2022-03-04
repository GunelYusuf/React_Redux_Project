import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Basket from '../basket/Basket';


class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="header-area">
                    <div className="desktop-nav d-none d-lg-block">
                        <div className="header-nav">
                            <div className="container-fluid custom-container">
                                <div className="header-nav-wrapper d-flex justify-content-between">
                                    <div className="header-static-nav">
                                        <p>Get FREE Shipping with <span className="text">$35!</span> Code: FREESHIPPING
                                        </p>
                                    </div>
                                    <div className="header-menu-nav">
                                        <ul className="menu-nav">
                                            <li><Link to="compare.html"><i className="fal fa-repeat"></i> Compare (0)</Link>
                                            </li>
                                            <li><Link to="wishlist.html"><i className="fal fa-heart"></i> Wishlist(0)</Link>
                                            </li>
                                            <li>
                                                <div className="dropdown">
                                                    <button type="button" id="setting" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">Setting <i
                                                        className="icon ion-chevron-down"></i></button>

                                                    <ul className="dropdown-menu" aria-labelledby="setting">
                                                        <li><a href="my-account.html">My account</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="login.html">Sign in</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown">
                                                    <button type="button" id="currency" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">USD $ <i
                                                        className="icon ion-chevron-down"></i></button>

                                                    <ul className="dropdown-menu" aria-labelledby="currency">
                                                        <li><a href="#">EUR €</a></li>
                                                        <li><a href="#">USD $</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown">
                                                    <button type="button" id="langue" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false"><img
                                                        src="assets/images/flag/1.jpg" alt=""/> English <i
                                                        className="icon ion-chevron-down"></i></button>

                                                    <ul className="dropdown-menu" aria-labelledby="langue">
                                                        <li><a href="#"><img src="assets/images/flag/1.jpg"
                                                                             alt=""/> English</a></li>
                                                        <li><a href="#"><img src="assets/images/flag/2.jpg"
                                                                             alt=""/> Français</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="header-middle">
                            <div className="container-fluid custom-container">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="header-logo-contact d-flex  ">
                                            <div className="desktop-logo">
                                                <a href="index.html">
                                                    <img src="assets/images/logo.png" alt="Logo"/>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="header-search-cart  d-flex align-items-center">
                                            <div className="header-contact d-flex align-items-center">
                                                <i className="icon ion-ios-telephone-outline"></i>
                                                <div className="phone media-body">
                                                    <p>24/7 Support</p>
                                                    <a href="tel:+48500500500">+48 500 500 500</a>
                                                </div>
                                            </div>
                                            <div className="header-search media-body">
                                                <form>
                                                    <div className="search-category">
                                                        <select>
                                                            <option value="0">All categories</option>
                                                            <option value="12">Laptop</option>
                                                            <option value="13">- - Hot Categories</option>
                                                            <option value="19">- - - - Dresses</option>
                                                            <option value="20">- - - - Jackets &amp; Coats</option>
                                                            <option value="21">- - - - Sweaters</option>
                                                            <option value="22">- - - - Jeans</option>
                                                            <option value="23">- - - - Blouses &amp; Shirts</option>
                                                            <option value="14">- - Outerwear &amp; Jackets</option>
                                                            <option value="24">- - - - Basic Jackets</option>
                                                            <option value="25">- - - - Real Fur</option>
                                                            <option value="26">- - - - Down Coats</option>
                                                            <option value="27">- - - - Blazers</option>
                                                            <option value="28">- - - - Trench Coats</option>
                                                            <option value="15">- - Weddings &amp; Events</option>
                                                            <option value="29">- - - - Wedding Dresses</option>
                                                            <option value="30">- - - - Evening Dresses</option>
                                                            <option value="31">- - - - Prom Dresses</option>
                                                            <option value="32">- - - - Bridesmaid Dresses</option>
                                                            <option value="33">- - - - Wedding Accessories</option>
                                                            <option value="16">- - Bottoms</option>
                                                            <option value="34">- - - - Skirts</option>
                                                            <option value="35">- - - - Leggings</option>
                                                            <option value="36">- - - - Pants &amp; Capris</option>
                                                            <option value="37">- - - - Wide Leg Pants</option>
                                                            <option value="38">- - - - Shorts</option>
                                                            <option value="17">- - Tops &amp; Sets</option>
                                                            <option value="39">- - - - Tank Tops</option>
                                                            <option value="40">- - - - Suits &amp; Sets</option>
                                                            <option value="41">- - - - Jumpsuits</option>
                                                            <option value="42">- - - - Rompers</option>
                                                            <option value="43">- - - - Sleep &amp; Lounge</option>
                                                            <option value="18">- - Accessories</option>
                                                            <option value="44">- - - - Eyewear &amp; Accessories
                                                            </option>
                                                            <option value="45">- - - - Hats &amp; Caps</option>
                                                            <option value="46">- - - - Belts &amp; Cummerbunds</option>
                                                            <option value="47">- - - - Scarves &amp; Wraps</option>
                                                            <option value="48">- - - - Gloves &amp; Mittens</option>
                                                            <option value="49">Computer</option>
                                                            <option value="50">- - Bottoms</option>
                                                            <option value="53">- - - - Skirts</option>
                                                            <option value="54">- - - - Leggings</option>
                                                            <option value="55">- - - - Jeans</option>
                                                            <option value="56">- - - - Pants &amp; Capris</option>
                                                            <option value="57">- - - - Shorts</option>
                                                            <option value="51">- - Outerwear &amp; Jackets</option>
                                                            <option value="58">- - - - Trench</option>
                                                            <option value="59">- - - - Genuine Leather</option>
                                                            <option value="60">- - - - Parkas</option>
                                                            <option value="61">- - - - Down Jackets</option>
                                                            <option value="62">- - - - Wool &amp; Blends</option>
                                                            <option value="52">- - Underwear &amp; Loungewear</option>
                                                            <option value="63">- - - - Boxers</option>
                                                            <option value="64">- - - - Briefs</option>
                                                            <option value="65">- - - - Long Johns</option>
                                                            <option value="66">- - - - Men's Sleep &amp; Lounge</option>
                                                            <option value="67">- - - - Pajama Sets</option>
                                                            <option value="68">Smartphone</option>
                                                            <option value="69">- - Accessories &amp; Parts</option>
                                                            <option value="75">- - - - Cables &amp; Adapters</option>
                                                            <option value="76">- - - - Batteries</option>
                                                            <option value="77">- - - - Chargers</option>
                                                            <option value="78">- - - - Bags &amp; Cases</option>
                                                            <option value="79">- - - - Electronic Cigarettes</option>
                                                            <option value="70">- - Audio &amp; Video</option>
                                                            <option value="80">- - - - Televisions</option>
                                                            <option value="81">- - - - TV Receivers</option>
                                                            <option value="82">- - - - Projectors</option>
                                                            <option value="83">- - - - Audio Amplifier Boards</option>
                                                            <option value="84">- - - - TV Sticks</option>
                                                            <option value="71">- - Camera &amp; Photo</option>
                                                            <option value="85">- - - - Digital Cameras</option>
                                                            <option value="86">- - - - Camcorders</option>
                                                            <option value="87">- - - - Camera Drones</option>
                                                            <option value="88">- - - - Action Cameras</option>
                                                            <option value="89">- - - - Photo Studio Supplies</option>
                                                            <option value="72">- - Portable Audio &amp; Video</option>
                                                            <option value="90">- - - - Headphones</option>
                                                            <option value="91">- - - - Speakers</option>
                                                            <option value="92">- - - - MP3 Players</option>
                                                            <option value="93">- - - - VR/AR Devices</option>
                                                            <option value="94">- - - - Microphones</option>
                                                            <option value="73">- - Smart Electronics</option>
                                                            <option value="95">- - - - Wearable Devices</option>
                                                            <option value="96">- - - - Smart Home Appliances</option>
                                                            <option value="97">- - - - Smart Remote Controls</option>
                                                            <option value="98">- - - - Smart Watches</option>
                                                            <option value="99">- - - - Smart Wristbands</option>
                                                            <option value="74">- - Video Games</option>
                                                            <option value="100">- - - - Handheld Game Players</option>
                                                            <option value="101">- - - - Game Controllers</option>
                                                            <option value="102">- - - - Joysticks</option>
                                                            <option value="103">- - - - Stickers</option>
                                                            <option value="104">Game Consoles</option>
                                                            <option value="105">Mp3 &amp; headphone</option>
                                                            <option value="106">Tv &amp; Video</option>
                                                            <option value="107">Watches</option>
                                                            <option value="108">Washing Machine</option>
                                                            <option value="109">Camera</option>
                                                            <option value="110">Audio &amp; Theater</option>
                                                            <option value="111">Accessories</option>
                                                            <option value="112">Games &amp; Consoles</option>
                                                        </select>
                                                    </div>
                                                    <input type="text" placeholder="Enter your search key ... "/>
                                                        <button><i className="icon ion-android-search"></i></button>
                                              </form>
                                            </div>
                                          <Basket></Basket>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="header-menu">
                            <div className="container-fluid custom-container">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="header-menu-vertical">
                                            <h4 className="menu-title">
                                                <span>Shop by</span>
                                                Department
                                            </h4>
                                            <ul className="menu-content menu-expand">
                                                <li className="menu-item">
                                                    <a href="#">Laptop <i className="fal fa-chevron-right"></i></a>
                                                    <ul className="sub-menu flex-wrap">
                                                        <li>
                                                            <a href="#"><span>Hot Categories</span></a>
                                                            <ul className="submenu-item ">
                                                                <li><a href="shop-left-sidebar.html">Dresses</a></li>
                                                                <li><a href="shop-left-sidebar.html">Jackets & Coats</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Sweaters</a></li>
                                                                <li><a href="shop-left-sidebar.html">Jeans</a></li>
                                                                <li><a href="shop-left-sidebar.html">Blouses &
                                                                    Shirts</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span>Outerwear & Jackets</span></a>
                                                            <ul className="submenu-item ">
                                                                <li><a href="shop-left-sidebar.html">Basic Jackets</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Real Fur</a></li>
                                                                <li><a href="shop-left-sidebar.html">Down Coats</a></li>
                                                                <li><a href="shop-left-sidebar.html">Blazers</a></li>
                                                                <li><a href="shop-left-sidebar.html">Trench Coats </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <img src="assets/images/banner-image.png" alt=""/>
                                                        </li>
                                                    </ul>

                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">Computer <i className="fal fa-chevron-right"></i></a>
                                                    <ul className="sub-menu flex-wrap">
                                                        <li>
                                                            <a href="#"><span>Accessories & Parts</span></a>
                                                            <ul className="submenu-item ">
                                                                <li><a href="shop-left-sidebar.html">Cables &
                                                                    Adapters</a></li>
                                                                <li><a href="shop-left-sidebar.html">Batteries</a></li>
                                                                <li><a href="shop-left-sidebar.html">Chargers</a></li>
                                                                <li><a href="shop-left-sidebar.html">Bags & Cases</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Electronic
                                                                    Cigarettes</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span>Audio & Video</span></a>
                                                            <ul className="submenu-item ">
                                                                <li><a href="shop-left-sidebar.html">Televisions</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">TV Receivers</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Projectors</a></li>
                                                                <li><a href="shop-left-sidebar.html">Audio Amplifier
                                                                    Boards</a></li>
                                                                <li><a href="shop-left-sidebar.html">TV Sticks </a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span>Camera & Photo</span></a>
                                                            <ul className="submenu-item ">
                                                                <li><a href="shop-left-sidebar.html">Digital Cameras</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Camcorders</a></li>
                                                                <li><a href="shop-left-sidebar.html">Camera Drones</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Action Cameras</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Photo Studio
                                                                    Supplies </a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                </li>
                                                <li className="menu-item"><a
                                                    href="shop-left-sidebar.html">Smartphone</a></li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Game
                                                    Consoles</a></li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Mp3 &
                                                    headphone</a></li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Tv &
                                                    Video</a></li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Watches</a>
                                                </li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Watches</a>
                                                </li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Washing
                                                    Machine</a></li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Camera</a>
                                                </li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Audio &
                                                    Theater</a></li>
                                                <li className="menu-item"><a
                                                    href="shop-left-sidebar.html">Accessories</a></li>
                                                <li className="menu-item"><a href="shop-left-sidebar.html">Games &
                                                    Consoles</a></li>
                                            </ul>

                                        </div>

                                    </div>

                                    <div className="col-lg-9 position-static">
                                        <div className="header-horizontal-menu">
                                            <ul className="menu-content">
                                                <li className="active"><a href="#">Home <i
                                                    className="fal fa-chevron-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="index.html">Home 01</a></li>
                                                        <li><a href="index-2.html">Home 02</a></li>
                                                        <li><a href="index-3.html">Home 03</a></li>
                                                        <li><a href="index-4.html">Home 04</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="#">Pages <i className="fal fa-chevron-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a href="cart.html">cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="compare.html">Compare</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="my-account.html">My Account</a></li>
                                                        <li><a href="login.html">Login</a></li>
                                                        <li><a href="register.html">Register</a></li>
                                                    </ul>
                                                </li>
                                                <li className="position-static"><a href="#">Shop <i
                                                    className="fal fa-chevron-down"></i></a>
                                                    <ul className="mega-sub-menu d-flex flex-wrap">
                                                        <li>
                                                            <a className="menu-title" href="#">Shop Grid</a>
                                                            <ul className="submenu-item">
                                                                <li><a href="shop-3-column.html">Shop Grid Column 3</a>
                                                                </li>
                                                                <li><a href="shop-4-column.html">Shop Grid Column 4</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Shop Grid left
                                                                    sidebar</a></li>
                                                                <li><a href="shop-right-sidebar.html">Shop Grid Right
                                                                    sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="#">Shop List</a>
                                                            <ul className="submenu-item">
                                                                <li><a href="shop-list.html">Shop List</a></li>
                                                                <li><a href="shop-list-left-sidebar.html">Shop List Left
                                                                    sidebar</a></li>
                                                                <li><a href="shop-list-right-sidebar.html">Shop List
                                                                    Right sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="#">Shop Single</a>
                                                            <ul className="submenu-item">
                                                                <li><a href="single-product.html">Shop Single</a></li>
                                                                <li><a href="single-product-variable.html">Shop
                                                                    Variable</a></li>
                                                                <li><a href="single-product-affiliate.html">Shop
                                                                    Affiliate</a></li>
                                                                <li><a href="single-product-group.html">Shop Group</a>
                                                                </li>
                                                                <li><a href="single-product-tabstyle2.html">Shop Tabs
                                                                    2</a></li>
                                                                <li><a href="single-product-tabstyle3.html">Shop Tabs
                                                                    3</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="#">Shop Single</a>
                                                            <ul className="submenu-item">
                                                                <li><a href="single-product-slider.html">Shop Slider</a>
                                                                </li>
                                                                <li><a href="single-product-gallery-left.html">Shop
                                                                    Gallery Left sidebar</a></li>
                                                                <li><a href="single-product-gallery-right.html">Shop
                                                                    Gallery Right sidebar</a></li>
                                                                <li><a href="single-product-sticky-left.html">Shop
                                                                    Sticky Left sidebar</a></li>
                                                                <li><a href="single-product-sticky-right.html">Shop
                                                                    Sticky Right sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="custom-banner">
                                                            <a href="shop-4-column.html"><img
                                                                src="assets/images/custom_banner.jpg" alt=""
                                                                className="img-responsive"/></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="position-static">
                                                    <a href="#">Custom Menu <i className="fal fa-chevron-down"></i></a>
                                                    <ul className="mega-sub-menu">
                                                        <li className="custom-menu">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-12">
                                                                    <div className="menu-block">
                                                                        <h6 className="custom-title">Women is
                                                                            Clothes &amp; Fashion</h6>
                                                                        <p>Shop women is clothing and accessories and
                                                                            get inspired by the latest fashion
                                                                            trends.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-12">
                                                                    <div className="menu-block">
                                                                        <h6 className="custom-title">Simple Style</h6>
                                                                        <p>A new flattering style with all the comfort
                                                                            of our linen.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-12">
                                                                    <div className="menu-block">
                                                                        <h6 className="custom-title">Easy Layers</h6>
                                                                        <p>Endless styling possibilities in a collection
                                                                            full of versatile pieces.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="custom-banner">
                                                                <a href="shop-4-column.html"><img
                                                                    src="assets/images/custom_banner.jpg" alt=""
                                                                    className="img-responsive"/></a>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </li>
                                                <li><a href="#">Blog <i className="fal fa-chevron-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Blog Grid <i
                                                            className="fal fa-chevron-right"></i></a>
                                                            <ul className="sub-menu">
                                                                <li><a href="blog-grid-left-sidebar.html">Blog Grid Left
                                                                    Slider</a></li>
                                                                <li><a href="blog-grid-right-sidebar.html">Blog Grid
                                                                    Right Slider</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Blog List <i
                                                            className="fal fa-chevron-right"></i></a>
                                                            <ul className="sub-menu">
                                                                <li><a href="blog-list-left-sidebar.html">Blog List Left
                                                                    Slider</a></li>
                                                                <li><a href="blog-list-right-sidebar.html">Blog List
                                                                    Right Slider</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Blog Single <i
                                                            className="fal fa-chevron-right"></i></a>
                                                            <ul className="sub-menu">
                                                                <li><a href="blog-single-left-sidebar.html">Blog Single
                                                                    Left Slider</a></li>
                                                                <li><a href="blog-single-right-sidebar.html">Blog Single
                                                                    Right Slider</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="mobile-nav d-lg-none">
                        <div className="container-fluid">
                            <div className="mobile-nav-top">
                                <div className="row align-items-center">
                                    <div className="col-sm-4 col-3">
                                        <div className="mobile-toggle">
                                            <a className="mobile-menu-open" href="javascript:;"><i
                                                className="fal fa-bars"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <div className="mobile-logo text-center">
                                            <a href="index.html">
                                                <img src="assets/images/logo.png" alt="Logo"/>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="col-sm-4  col-4">
                                        <div className="mobile-account-cart">
                                            <ul className="account-cart text-right">
                                                <li>
                                                    <div className="dropdown">
                                                        <button type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false"><i className="fal fa-user"></i>
                                                        </button>

                                                        <ul className="dropdown-menu"
                                                            aria-labelledby="dropdownMenuButton">
                                                            <li><a href="#">My account</a></li>
                                                            <li><a href="#">Checkout</a></li>
                                                            <li><a href="#">Sign in</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="header-cart">
                                                    <a href="#">
                                                        <i className="fal fa-shopping-cart"></i>
                                                        <span>0</span>
                                                    </a>
                                                    <div className="mini-cart">
                                                        <ul className="cart-items">
                                                            <li>
                                                                <div className="single-cart-item d-flex">
                                                                    <div className="cart-item-thumb">
                                                                        <a href="single-product.html"><img
                                                                            src="assets/images/product-cart/cart-1.jpg"
                                                                            alt="product"/></a>
                                                                        <span className="product-quantity">1x</span>
                                                                    </div>
                                                                    <div className="cart-item-content media-body">
                                                                        <h5 className="product-name"><a
                                                                            href="single-product.html">New Balance Fresh
                                                                            Foam LAZR</a></h5>
                                                                        <span className="product-price">€18.90</span>
                                                                        <span
                                                                            className="product-color"><strong>Color:</strong> White</span>
                                                                        <a href="#" className="product-close"><i
                                                                            className="fal fa-times"></i></a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="single-cart-item d-flex">
                                                                    <div className="cart-item-thumb">
                                                                        <a href="single-product.html"><img
                                                                            src="assets/images/product-cart/cart-2.jpg"
                                                                            alt="product"/></a>
                                                                        <span className="product-quantity">3x</span>
                                                                    </div>
                                                                    <div className="cart-item-content media-body">
                                                                        <h5 className="product-name"><a
                                                                            href="single-product.html">New Balance Fresh
                                                                            Foam LAZR</a></h5>
                                                                        <span className="product-price">€18.90</span>
                                                                        <span
                                                                            className="product-color"><strong>Color:</strong> White</span>
                                                                        <a href="#" className="product-close"><i
                                                                            className="fal fa-times"></i></a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="price_content">
                                                            <div className="cart-subtotals">
                                                                <div className="products price_inline">
                                                                    <span className="label">Subtotal</span>
                                                                    <span className="value">€30.80</span>
                                                                </div>
                                                                <div className="shipping price_inline">
                                                                    <span className="label">Shipping</span>
                                                                    <span className="value">€7.00</span>
                                                                </div>
                                                                <div className="tax price_inline">
                                                                    <span className="label">Taxes</span>
                                                                    <span className="value">€0.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="cart-total price_inline">
                                                                <span className="label">Total</span>
                                                                <span className="value">€37.80</span>
                                                            </div>
                                                        </div>

                                                        <div className="checkout text-center">
                                                            <a href="checkout.html" className="main-btn">Checkout</a>
                                                        </div>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="header-search">
                                <form action="#">
                                    <div className="search-category">
                                        <select>
                                            <option value="0">All categories</option>
                                            <option value="12">Laptop</option>
                                            <option value="13">- - Hot Categories</option>
                                            <option value="19">- - - - Dresses</option>
                                            <option value="20">- - - - Jackets &amp; Coats</option>
                                            <option value="21">- - - - Sweaters</option>
                                            <option value="22">- - - - Jeans</option>
                                            <option value="23">- - - - Blouses &amp; Shirts</option>
                                            <option value="14">- - Outerwear &amp; Jackets</option>
                                            <option value="24">- - - - Basic Jackets</option>
                                            <option value="25">- - - - Real Fur</option>
                                            <option value="26">- - - - Down Coats</option>
                                            <option value="27">- - - - Blazers</option>
                                            <option value="28">- - - - Trench Coats</option>
                                            <option value="15">- - Weddings &amp; Events</option>
                                            <option value="29">- - - - Wedding Dresses</option>
                                            <option value="30">- - - - Evening Dresses</option>
                                            <option value="31">- - - - Prom Dresses</option>
                                            <option value="32">- - - - Bridesmaid Dresses</option>
                                            <option value="33">- - - - Wedding Accessories</option>
                                            <option value="16">- - Bottoms</option>
                                            <option value="34">- - - - Skirts</option>
                                            <option value="35">- - - - Leggings</option>
                                            <option value="36">- - - - Pants &amp; Capris</option>
                                            <option value="37">- - - - Wide Leg Pants</option>
                                            <option value="38">- - - - Shorts</option>
                                            <option value="17">- - Tops &amp; Sets</option>
                                            <option value="39">- - - - Tank Tops</option>
                                            <option value="40">- - - - Suits &amp; Sets</option>
                                            <option value="41">- - - - Jumpsuits</option>
                                            <option value="42">- - - - Rompers</option>
                                            <option value="43">- - - - Sleep &amp; Lounge</option>
                                            <option value="18">- - Accessories</option>
                                            <option value="44">- - - - Eyewear &amp; Accessories</option>
                                            <option value="45">- - - - Hats &amp; Caps</option>
                                            <option value="46">- - - - Belts &amp; Cummerbunds</option>
                                            <option value="47">- - - - Scarves &amp; Wraps</option>
                                            <option value="48">- - - - Gloves &amp; Mittens</option>
                                            <option value="49">Computer</option>
                                            <option value="50">- - Bottoms</option>
                                            <option value="53">- - - - Skirts</option>
                                            <option value="54">- - - - Leggings</option>
                                            <option value="55">- - - - Jeans</option>
                                            <option value="56">- - - - Pants &amp; Capris</option>
                                            <option value="57">- - - - Shorts</option>
                                            <option value="51">- - Outerwear &amp; Jackets</option>
                                            <option value="58">- - - - Trench</option>
                                            <option value="59">- - - - Genuine Leather</option>
                                            <option value="60">- - - - Parkas</option>
                                            <option value="61">- - - - Down Jackets</option>
                                            <option value="62">- - - - Wool &amp; Blends</option>
                                            <option value="52">- - Underwear &amp; Loungewear</option>
                                            <option value="63">- - - - Boxers</option>
                                            <option value="64">- - - - Briefs</option>
                                            <option value="65">- - - - Long Johns</option>
                                            <option value="66">- - - - Men's Sleep &amp; Lounge</option>
                                            <option value="67">- - - - Pajama Sets</option>
                                            <option value="68">Smartphone</option>
                                            <option value="69">- - Accessories &amp; Parts</option>
                                            <option value="75">- - - - Cables &amp; Adapters</option>
                                            <option value="76">- - - - Batteries</option>
                                            <option value="77">- - - - Chargers</option>
                                            <option value="78">- - - - Bags &amp; Cases</option>
                                            <option value="79">- - - - Electronic Cigarettes</option>
                                            <option value="70">- - Audio &amp; Video</option>
                                            <option value="80">- - - - Televisions</option>
                                            <option value="81">- - - - TV Receivers</option>
                                            <option value="82">- - - - Projectors</option>
                                            <option value="83">- - - - Audio Amplifier Boards</option>
                                            <option value="84">- - - - TV Sticks</option>
                                            <option value="71">- - Camera &amp; Photo</option>
                                            <option value="85">- - - - Digital Cameras</option>
                                            <option value="86">- - - - Camcorders</option>
                                            <option value="87">- - - - Camera Drones</option>
                                            <option value="88">- - - - Action Cameras</option>
                                            <option value="89">- - - - Photo Studio Supplies</option>
                                            <option value="72">- - Portable Audio &amp; Video</option>
                                            <option value="90">- - - - Headphones</option>
                                            <option value="91">- - - - Speakers</option>
                                            <option value="92">- - - - MP3 Players</option>
                                            <option value="93">- - - - VR/AR Devices</option>
                                            <option value="94">- - - - Microphones</option>
                                            <option value="73">- - Smart Electronics</option>
                                            <option value="95">- - - - Wearable Devices</option>
                                            <option value="96">- - - - Smart Home Appliances</option>
                                            <option value="97">- - - - Smart Remote Controls</option>
                                            <option value="98">- - - - Smart Watches</option>
                                            <option value="99">- - - - Smart Wristbands</option>
                                            <option value="74">- - Video Games</option>
                                            <option value="100">- - - - Handheld Game Players</option>
                                            <option value="101">- - - - Game Controllers</option>
                                            <option value="102">- - - - Joysticks</option>
                                            <option value="103">- - - - Stickers</option>
                                            <option value="104">Game Consoles</option>
                                            <option value="105">Mp3 &amp; headphone</option>
                                            <option value="106">Tv &amp; Video</option>
                                            <option value="107">Watches</option>
                                            <option value="108">Washing Machine</option>
                                            <option value="109">Camera</option>
                                            <option value="110">Audio &amp; Theater</option>
                                            <option value="111">Accessories</option>
                                            <option value="112">Games &amp; Consoles</option>
                                        </select>
                                    </div>
                                    <input type="text" placeholder="Enter your search key ... "/>
                                        <button><i className="icon ion-android-search"></i></button>
                                </form>
                            </div>
                        </div>


                        <div className="mobile-off-canvas-menu">
                            <div className="mobile-canvas-menu-top">
                                <ul className="menu-nav">
                                    <li><a href="compare.html"><i className="fal fa-repeat"></i> Compare (0)</a></li>
                                    <li><a href="wishlist.html"><i className="fal fa-heart"></i> Wishlist(0)</a></li>
                                </ul>
                                <ul className="mobile-canvas">
                                    <li>
                                        <div className="dropdown dropdown-mobile menu-item-has-children">
                                            <button className="dm-toggle" type="button">USD $ <i
                                                className="icon ion-chevron-down"></i></button>

                                            <ul className="dropdown-menu">
                                                <li><a href="#">EUR €</a></li>
                                                <li><a href="#">USD $</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown dropdown-mobile menu-item-has-children">
                                            <button className="dm-toggle" type="button"><img
                                                src="assets/images/flag/1.jpg" alt=""/> English <i
                                                className="icon ion-chevron-down"/></button>

                                            <ul className="dropdown-menu">
                                                <li><a href="#"><img src="assets/images/flag/1.jpg" alt=""/> English</a>
                                                </li>
                                                <li><a href="#"><img src="assets/images/flag/2.jpg" alt=""/> Français</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                            <div className="mobile-canvas-close close-mobile-menu">
                                <p>Menu <i className="fal fa-arrow-left"></i></p>
                            </div>

                            <div className="mobile-main-menu">
                                <ul className="menu-content">
                                    <li className="menu-item-has-children active"><a href="#">Home <i
                                        className="fal fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="index-2.html">Home 02</a></li>
                                            <li><a href="index-3.html">Home 03</a></li>
                                            <li><a href="index-4.html">Home 04</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="menu-item-has-children"><a href="#">Pages <i
                                        className="fal fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="cart.html">cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="compare.html">Compare</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Shop <i
                                        className="fal fa-chevron-down"></i></a>
                                        <ul className="mega-sub-menu">
                                            <li className="menu-item-has-children">
                                                <a className="menu-title" href="#">Shop Grid</a>
                                                <ul className="submenu-item">
                                                    <li><a href="shop-3-column.html">Shop Grid Column 3</a></li>
                                                    <li><a href="shop-4-column.html">Shop Grid Column 4</a></li>
                                                    <li><a href="shop-left-sidebar.html">Shop Grid left sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop Grid Right sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a className="menu-title" href="#">Shop List</a>
                                                <ul className="submenu-item">
                                                    <li><a href="shop-list.html">Shop List</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">Shop List Left sidebar</a>
                                                    </li>
                                                    <li><a href="shop-list-right-sidebar.html">Shop List Right
                                                        sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a className="menu-title" href="#">Shop Single</a>
                                                <ul className="submenu-item">
                                                    <li><a href="single-product.html">Shop Single</a></li>
                                                    <li><a href="single-product-variable.html">Shop Variable</a></li>
                                                    <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                                                    <li><a href="single-product-group.html">Shop Group</a></li>
                                                    <li><a href="single-product-tabstyle2.html">Shop Tabs 2</a></li>
                                                    <li><a href="single-product-tabstyle3.html">Shop Tabs 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a className="menu-title" href="#">Shop Single</a>
                                                <ul className="submenu-item">
                                                    <li><a href="single-product-slider.html">Shop Slider</a></li>
                                                    <li><a href="single-product-gallery-left.html">Shop Gallery Left
                                                        sidebar</a></li>
                                                    <li><a href="single-product-gallery-right.html">Shop Gallery Right
                                                        sidebar</a></li>
                                                    <li><a href="single-product-sticky-left.html">Shop Sticky Left
                                                        sidebar</a></li>
                                                    <li><a href="single-product-sticky-right.html">Shop Sticky Right
                                                        sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="custom-banner">
                                                <a href="shop-4-column.html"><img src="assets/images/custom_banner.jpg"
                                                                                  alt="" className="img-responsive"/></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Custom Menu <i className="fal fa-chevron-down"></i></a>
                                        <ul className="mega-sub-menu">
                                            <li className="custom-menu">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-12">
                                                        <div className="menu-block">
                                                            <h6 className="custom-title">Women is
                                                                Clothes &amp; Fashion</h6>
                                                            <p>Shop women is clothing and accessories and get inspired
                                                                by the latest fashion trends.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-12">
                                                        <div className="menu-block">
                                                            <h6 className="custom-title">Simple Style</h6>
                                                            <p>A new flattering style with all the comfort of our
                                                                linen.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-12">
                                                        <div className="menu-block">
                                                            <h6 className="custom-title">Easy Layers</h6>
                                                            <p>Endless styling possibilities in a collection full of
                                                                versatile pieces.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="custom-banner">
                                                    <a href="shop-4-column.html"><img
                                                        src="assets/images/custom_banner.jpg" alt=""
                                                        className="img-responsive"/></a>
                                                </div>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Blog <i
                                        className="fal fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children"><a href="#">Blog Grid <i
                                                className="fal fa-chevron-right"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Slider</a>
                                                    </li>
                                                    <li><a href="blog-grid-right-sidebar.html">Blog Grid Right
                                                        Slider</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">Blog List <i
                                                className="fal fa-chevron-right"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-list-left-sidebar.html">Blog List Left Slider</a>
                                                    </li>
                                                    <li><a href="blog-list-right-sidebar.html">Blog List Right
                                                        Slider</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">Blog Single <i
                                                className="fal fa-chevron-right"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-single-left-sidebar.html">Blog Single Left
                                                        Slider</a></li>
                                                    <li><a href="blog-single-right-sidebar.html">Blog Single Right
                                                        Slider</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>

                                <ul className="menu-content">
                                    <li className="menu-item-has-children">
                                        <a href="#">Laptop <i className="fal fa-chevron-right"></i></a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#"><span>Hot Categories</span></a>
                                                <ul className="submenu-item ">
                                                    <li><a href="shop-left-sidebar.html">Dresses</a></li>
                                                    <li><a href="shop-left-sidebar.html">Jackets & Coats</a></li>
                                                    <li><a href="shop-left-sidebar.html">Sweaters</a></li>
                                                    <li><a href="shop-left-sidebar.html">Jeans</a></li>
                                                    <li><a href="shop-left-sidebar.html">Blouses & Shirts</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#"><span>Outerwear & Jackets</span></a>
                                                <ul className="submenu-item ">
                                                    <li><a href="shop-left-sidebar.html">Basic Jackets</a></li>
                                                    <li><a href="shop-left-sidebar.html">Real Fur</a></li>
                                                    <li><a href="shop-left-sidebar.html">Down Coats</a></li>
                                                    <li><a href="shop-left-sidebar.html">Blazers</a></li>
                                                    <li><a href="shop-left-sidebar.html">Trench Coats </a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <img src="assets/images/banner-image.png" alt=""/>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Computer <i className="fal fa-chevron-right"></i></a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#"><span>Accessories & Parts</span></a>
                                                <ul className="submenu-item">
                                                    <li><a href="shop-left-sidebar.html">Cables & Adapters</a></li>
                                                    <li><a href="shop-left-sidebar.html">Batteries</a></li>
                                                    <li><a href="shop-left-sidebar.html">Chargers</a></li>
                                                    <li><a href="shop-left-sidebar.html">Bags & Cases</a></li>
                                                    <li><a href="shop-left-sidebar.html">Electronic Cigarettes</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#"><span>Audio & Video</span></a>
                                                <ul className="submenu-item ">
                                                    <li><a href="shop-left-sidebar.html">Televisions</a></li>
                                                    <li><a href="shop-left-sidebar.html">TV Receivers</a></li>
                                                    <li><a href="shop-left-sidebar.html">Projectors</a></li>
                                                    <li><a href="shop-left-sidebar.html">Audio Amplifier Boards</a></li>
                                                    <li><a href="shop-left-sidebar.html">TV Sticks </a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#"><span>Camera & Photo</span></a>
                                                <ul className="submenu-item ">
                                                    <li><a href="shop-left-sidebar.html">Digital Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Camcorders</a></li>
                                                    <li><a href="shop-left-sidebar.html">Camera Drones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Action Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Photo Studio Supplies </a></li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </li>
                                    <li><a href="shop-left-sidebar.html">Smartphone</a></li>
                                    <li><a href="shop-left-sidebar.html">Game Consoles</a></li>
                                    <li><a href="shop-left-sidebar.html">Mp3 & headphone</a></li>
                                    <li><a href="shop-left-sidebar.html">Tv & Video</a></li>
                                    <li><a href="shop-left-sidebar.html">Watches</a></li>
                                    <li><a href="shop-left-sidebar.html">Watches</a></li>
                                    <li><a href="shop-left-sidebar.html">Washing Machine</a></li>
                                    <li><a href="shop-left-sidebar.html">Camera</a></li>
                                    <li><a href="shop-left-sidebar.html">Audio & Theater</a></li>
                                    <li><a href="shop-left-sidebar.html">Accessories</a></li>
                                    <li><a href="shop-left-sidebar.html">Games & Consoles</a></li>
                                </ul>

                            </div>

                        </div>

                        <div className="overlay"></div>
                    </div>

                </header>
            </div>
        )
    }
}

export default Navbar;