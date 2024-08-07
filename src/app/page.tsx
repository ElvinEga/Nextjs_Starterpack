"use client";
import Image from "next/image";
import JOS from "jos-animation";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { BadgeCheck, CookingPot, HandCoins, HandPlatter } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initJOS = () => {
      const options = {
        debugMode: true,
        animation: "flip",
        duration: 0.7,
        rootMargin: "0% 0% 0% 0%",
      };
      JOS.init(options);
    };

    initJOS();
    JOS.refresh();

    return () => {
      // Clean up JOS if necessary
    };
  }, []);
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <header
        className="site-header site-header--absolute is--white py-3"
        id="sticky-menu"
      >
        <div className="container-default">
          <div className="flex items-center justify-between gap-x-8">
            {/* Header Logo */}
            <a className="" href="/">
              <img
                src="assets/img/logo-violet-dark.png"
                alt="Masco"
                width={109}
                height={24}
              />
            </a>
            {/* Header Logo */}
            {/* Header Navigation */}
            <div className="menu-block-wrapper">
              <div className="menu-overlay" />
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa-solid fa-angle-left" />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close">×</div>
                </div>
                <ul className="site-menu-main">
                  <li className="nav-item nav-item-has-children">
                    <a href="#" className="nav-link-item drop-trigger">
                      Demo <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="sub-menu" id="submenu-1">
                      <li className="sub-menu--item">
                        <a href="/">Digital agency</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-2">Chat software</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-3">Fitness App</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-4">Online Courses</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-5">SEO Agency</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-6">Cold Email</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-7">Web Hosting</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-8">Startup</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-9">Tracking Software</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-10">AI Writing Tool</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-11">Website Builder</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-12">AI Photo Editor</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-13">initial coin offering (ICO)</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-14">AI Content Generator</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/index-15">IT Service</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link-item" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#" className="nav-link-item drop-trigger">
                      Services
                      <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="sub-menu" id="submenu-2">
                      <li className="sub-menu--item">
                        <a href="/services">Services</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/service-details">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#" className="nav-link-item drop-trigger">
                      Pages <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="sub-menu" id="submenu-3">
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          blogs <i className="fa-solid fa-angle-right" />
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-4">
                          <li className="sub-menu--item">
                            <a href="/blog">blogs</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/blog-details">blog details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          Team
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-5">
                          <li className="sub-menu--item">
                            <a href="/teams">Teams</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          FAQ
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-6">
                          <li className="sub-menu--item">
                            <a href="/faq">FAQ-1</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/faq-2">FAQ-2</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/faq-3">FAQ-3</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/faq-4">FAQ-4</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          Portfolio
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-7">
                          <li className="sub-menu--item">
                            <a href="/portfolio">Portfolio Classic</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/portfolio-2">Portfolio Masonry</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/portfolio-3">Portfolio Modern</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/portfolio-4">Portfolio Minimal</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/portfolio-details">Portfolio Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          Pricing
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-8">
                          <li className="sub-menu--item">
                            <a href="/pricing">Pricing-1</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/pricing-2">Pricing-2</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          Careers
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-9">
                          <li className="sub-menu--item">
                            <a href="/careers">Career</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/career-details">Career Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          Utilities
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-10">
                          <li className="sub-menu--item">
                            <a href="/login">Login</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/signup">Signup</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/reset-password">Reset Password</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/coming-soon">Coming Soon</a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="/error-404">Error 404</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#" className="nav-link-item drop-trigger">
                      Contact
                      <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="sub-menu" id="submenu-11">
                      <li className="sub-menu--item">
                        <a href="/contact">Contact-1</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/contact-2">Contact-2</a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="/contact-3">Contact-3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Header Navigation */}
            {/* Header User Event */}
            <div className="flex items-center gap-6">
              <a
                className="btn-text hidden hover:text-ColorViolet sm:inline-block"
                href="/login"
              >
                Login
              </a>
              <a
                className="group relative hidden sm:inline-block"
                href="/signup"
              >
                <div className="btn is-rounded is-violet">Sign up free</div>
                <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
              </a>
              {/* Responsive Offcanvas Menu Button */}
              <div className="block lg:hidden">
                <button
                  id="openBtn"
                  className="hamburger-menu mobile-menu-trigger"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
            {/* Header User Event */}
          </div>
        </div>
      </header>
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section className="section-hero">
          <div className="relative z-10">
            {/* Hero Space */}
            <div className="pb-20 pt-[100px] md:pt-[120px] lg:pb-[110px] lg:pt-[190px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Hero Area Block */}
                <div className="grid items-center gap-x-[60px] gap-y-12 lg:grid-cols-[1fr_0.8fr] xl:gap-x-[100px]">
                  {/* Hero Content Block */}
                  <div className="mx-auto max-w-[580px] text-center lg:max-w-none lg:text-left">
                    <h1 className="mb-6 font-DmSans text-[32px] font-bold leading-[1.04] -tracking-[1px] sm:text-5xl lg:text-[65px] xl:text-[78px] xxl:text-[90px]">
                      Keep learning and boost your knowledge
                    </h1>
                    <p className="mb-8 lg:mb-[50px]">
                      Looking to add new skills? We’re a leading destination for
                      online education and world-class education anywhere. We
                      give you many courses and the freedom to learn what you
                      want.
                    </p>
                    <a href="#" className="group relative inline-block">
                      <div className="btn is-large is-rounded is-violet">
                        Start a free course
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </a>
                  </div>
                  {/* Hero Content Block */}
                  {/* Hero Image Block */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative inline-block">
                      <img
                        src="assets/img/th-4/hero-img.png"
                        alt="hero-img"
                        width={420}
                        height={532}
                        className="max-w-full"
                      />
                      {/* Hero Image Shape */}
                      <div className="absolute right-0 top-1 flex h-[150px] w-[150px] items-center justify-center text-center xl:left-[320px]">
                        <img
                          src="assets/img/elements/hero-4-start-shape-1.svg"
                          alt="hero-4-start-shape-1"
                          width={150}
                          height={150}
                          className="rotate-360"
                        />
                        <span className="absolute inline-block max-w-[100px] text-base font-bold text-ColorBlack">
                          10% OFF on all courses
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Hero Image Block */}
                </div>
                {/* Hero Area Block */}
              </div>
              {/* Section Container */}
            </div>
            {/* Hero Space */}
            {/* Hero Background Shape */}
            <img
              src="assets/img/elements/hero-4-bg-shape.svg"
              alt="hero-4-bg-shape"
              height={1038}
              width={1038}
              className="absolute right-0 top-0 -z-10"
            />
            {/* Background Divider Shape */}
            <div className="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
          </div>
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Features Section Start :::... */}
        <section className="section-features">
          {/* Section Background */}
          <div className="relative z-10 bg-[#F5EFEB]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div
                  className="mb-[60px] xl:mb-20 jos"
                  data-jos_once={1}
                  data-jos_animation="fade-up"
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <h2 className="text-center font-DmSans -tracking-[1px]">
                      Special features that make our online courses the best
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Feature List */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {/* Features Item */}
                  <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay={0}
                    data-jos_once={1}
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                      <img
                        src="assets/img/icons/icon-violet-feature-1.svg"
                        alt="icon-violet-feature-1"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        New Skills
                      </div>
                      <p className="line-clamp-3">
                        Learning keeps your mind engaged and active. It helps
                        you get new &amp; knowledge.
                      </p>
                    </div>
                  </div>
                  {/* Features Item */}
                  {/* Features Item */}
                  <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="0.3"
                    data-jos_once={1}
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                      <img
                        src="assets/img/icons/icon-violet-feature-2.svg"
                        alt="icon-violet-feature-2"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        Made By Experts
                      </div>
                      <p className="line-clamp-3">
                        Our library of trusted mentors and lessons covers math,
                        science and more.
                      </p>
                    </div>
                  </div>
                  {/* Features Item */}
                  {/* Features Item */}
                  <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="0.6"
                    data-jos_once={1}
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                      <img
                        src="assets/img/icons/icon-violet-feature-3.svg"
                        alt="icon-violet-feature-3"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        Career Opportunities
                      </div>
                      <p className="line-clamp-3">
                        It refers to any opportunities that take you closer to
                        your career goals achievement.
                      </p>
                    </div>
                  </div>
                  {/* Features Item */}
                  {/* Features Item */}
                  <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="0.9"
                    data-jos_once={1}
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                      <img
                        src="assets/img/icons/icon-violet-feature-4.svg"
                        alt="icon-violet-feature-4"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        Lifelong Learning
                      </div>
                      <p className="line-clamp-3">
                        We create articles, tutorials &amp; webinars with
                        trailblazers in the web community.
                      </p>
                    </div>
                  </div>
                  {/* Features Item */}
                </div>
                {/* Feature List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* Feature Element - 1 */}
            <img
              src="assets/img/elements/home-4-features-element.svg"
              alt="home-4-features-element"
              width={220}
              height={180}
              className="absolute left-[164px] top-[35px] -z-10"
            />
          </div>
          {/* Section Background */}
          {/* Background Divider Shape */}
          <div className="min-h-[65px] w-full rotate-180 bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
        </section>
        {/*...::: Features Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Content Area */}
              <div className="grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[0.8fr_minmax(0,_1fr)] lg:gap-x-20 xl:gap-x-[110px]">
                {/* Content Block */}
                <div
                  className="order-2 jos"
                  data-jos_animation="fade-right"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-DmSans -tracking-[1px]">
                        Propel your career &amp; expand your knowledge at any
                        level
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                    Masco is an online course class that provides various
                    categories of courses ranging from design, photography,
                    marking, and many more. With more than 250 schools and
                    colleges and 50,000+ students
                  </p>
                  <p>
                    from multiple countries. With this curriculum, it is hoped
                    that students can learn with experts in their respective
                    fields anytime &amp; anywhere.
                  </p>
                  <div className="mt-[50px]">
                    <a href="#" className="group relative z-10 inline-block">
                      <div className="btn is-large is-rounded is-violet">
                        Explore more
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </a>
                  </div>
                </div>
                {/* Content Block */}
                {/* Content Image Block */}
                <div
                  className="order-1 flex justify-center jos"
                  data-jos_animation="fade-left"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <img
                    src="assets/img/th-4/content-img-1.png"
                    alt="content-img-1"
                    width={450}
                    height={532}
                  />
                </div>
                {/* Content Image Block */}
              </div>
              {/* Content Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Ticket Slider Section Start :::... */}
        <div className="section-topic">
          <div className="relative">
            {/* Section Space */}
            <div className="section-space-bottom">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div
                  className="mb-[60px] xl:mb-20 jos"
                  data-jos_once={1}
                  data-jos_animation="fade-up"
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <h2 className="text-center font-DmSans -tracking-[1px]">
                      Here are numerous topics that will enhance your skills
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
              </div>
              {/* Section Container */}
              {/* Ticket Slider Area */}
              <div>
                {/* Ticket Wrapper */}
                <div className="flex flex-row flex-nowrap py-5">
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Web Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      UI/UX Design
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Programming Languages
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Web Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      UI/UX Design
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Programming Languages
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Web Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      UI/UX Design
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Programming Languages
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                </div>
                {/* Ticket Wrapper */}
                {/* Ticket Wrapper */}
                <div className="flex flex-row flex-nowrap py-5">
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Web Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      UI/UX Design
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Programming Languages
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Web Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      UI/UX Design
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Programming Languages
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Web Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      UI/UX Design
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Programming Languages
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                </div>
                {/* Ticket Wrapper */}
              </div>
              {/* Ticket Slider Area */}
            </div>
            {/* Section Space */}
          </div>
        </div>
        {/*...::: Ticket Slider Section End :::... */}
        {/*...::: Course Section Start :::... */}
        <section className="course-section">
          <div className="relative">
            {/* Section Background */}
            <div className="bg-[#F5EFEB]">
              {/* Section Space */}
              <div className="section-space">
                {/* Section Container */}
                <div className="container-default">
                  {/* Section Content Wrapper */}
                  <div
                    className="mx-auto mb-[60px] grid items-center justify-between gap-5 text-center md:grid-cols-[1fr_minmax(0,_0.85fr)] md:gap-[60px] md:text-left xl:mb-20 xl:gap-28 xxl:gap-[244px] jos"
                    data-jos_once={1}
                    data-jos_animation="fade-up"
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_delay="0.5"
                    data-jos_counter={1}
                  >
                    {/* Section Content Block */}
                    <div>
                      <h2 className="font-DmSans -tracking-[1px]">
                        Browse our courses that are just right for you
                      </h2>
                    </div>
                    {/* Section Content Block */}
                    {/* Section Text */}
                    <p>
                      Choose from over 20,700 courses and learning paths, with
                      dozens added every week. Top it off with courses that
                      round out your skills and enrich your day-to-day.
                    </p>
                    {/* Section Text */}
                  </div>
                  {/* Section Content Wrapper */}
                  {/* Course List */}
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay={0}
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <img
                            src="assets/img/th-4/course-img-1.jpg"
                            alt="course-img-1"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <a href="#" className="hover:text-ColorViolet">
                                Digital Marketing
                              </a>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>942 Courses</span>
                            </li>
                          </ul>
                          <div>
                            <span className="text-ColorYellow">
                              <i className="fa-solid fa-star" />
                            </span>
                            4.8
                          </div>
                        </div>
                        <a
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          Digital marketing course gives you modern skills
                        </a>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          Purchase only $10.00
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay="0.3"
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <img
                            src="assets/img/th-4/course-img-2.jpg"
                            alt="course-img-2"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <a href="#" className="hover:text-ColorViolet">
                                Photography
                              </a>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>124 Courses</span>
                            </li>
                          </ul>
                          <div>
                            <span className="text-ColorYellow">
                              <i className="fa-solid fa-star" />
                            </span>
                            3.5
                          </div>
                        </div>
                        <a
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          Improve photography skills &amp; you'll learn to use
                          lenses
                        </a>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          Purchase for free
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay="0.6"
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <img
                            src="assets/img/th-4/course-img-3.jpg"
                            alt="course-img-3"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <a href="#" className="hover:text-ColorViolet">
                                C# Language
                              </a>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>22 Courses</span>
                            </li>
                          </ul>
                          <div>
                            <span className="text-ColorYellow">
                              <i className="fa-solid fa-star" />
                            </span>
                            5.0
                          </div>
                        </div>
                        <a
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          Programing language helps to solve problems logically
                        </a>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          Purchase only $650.00
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay="0.9"
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <img
                            src="assets/img/th-4/course-img-4.jpg"
                            alt="course-img-4"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <a href="#" className="hover:text-ColorViolet">
                                Art &amp; Music
                              </a>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>502 Courses</span>
                            </li>
                          </ul>
                          <div>
                            <span className="text-ColorYellow">
                              <i className="fa-solid fa-star" />
                            </span>
                            4.9
                          </div>
                        </div>
                        <a
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          This course improves your skills in a variety of ways
                        </a>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          Purchase for free
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay="1.2"
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <img
                            src="assets/img/th-4/course-img-5.jpg"
                            alt="course-img-5"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <a href="#" className="hover:text-ColorViolet">
                                Lifestyle
                              </a>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>832 Courses</span>
                            </li>
                          </ul>
                          <div>
                            <span className="text-ColorYellow">
                              <i className="fa-solid fa-star" />
                            </span>
                            3.0
                          </div>
                        </div>
                        <a
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          It helps improve self-esteem &amp; increase
                          life-satisfaction
                        </a>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          Purchase only $45.00
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay="1.5"
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <img
                            src="assets/img/th-4/course-img-6.jpg"
                            alt="course-img-6"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <a href="#" className="hover:text-ColorViolet">
                                UI/UX Design
                              </a>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>649 Courses</span>
                            </li>
                          </ul>
                          <div>
                            <span className="text-ColorYellow">
                              <i className="fa-solid fa-star" />
                            </span>
                            4.0
                          </div>
                        </div>
                        <a
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          UI/UX design teaches how to make a product attractive
                        </a>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          Purchase only $250.00
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                  </div>
                  {/* Course List */}
                </div>
                {/* Section Container */}
              </div>
              {/* Section Space */}
            </div>
            {/* Background Divider Shape */}
            <div className="absolute top-0 min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-3.svg')] bg-contain bg-[center_top] bg-repeat-x" />
            {/* Background Divider Shape */}
            <div className="-mt-px min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-4.svg')] bg-contain bg-[center_top] bg-repeat-x" />
            {/* Section Background */}
          </div>
        </section>
        {/*...::: Course Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Content Area */}
              <div className="grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[1fr_minmax(0,_0.8fr)] lg:gap-x-20 xl:gap-x-[110px]">
                {/* Content Block */}
                <div
                  className="order-1 jos"
                  data-jos_animation="fade-right"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-DmSans -tracking-[1px]">
                        Share your knowledge &amp; experience with others
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                    We believe everyone has something to give. Share your unique
                    skills &amp; experience with students around the world by
                    teaching free or paid.
                  </p>
                  <ul className="flex flex-col gap-5 font-semibold text-ColorBlack">
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <i className="fa-solid fa-badge-check" />
                      </span>
                      Free version can save unlimited workouts &amp; custom
                      routines
                    </li>
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <i className="fa-solid fa-badge-check" />
                      </span>
                      Track progress with graphs and automatically back up data
                    </li>
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <i className="fa-solid fa-badge-check" />
                      </span>
                      Connect easily with instructor for tips, feedback and
                      support
                    </li>
                  </ul>
                  <div className="mt-[50px]">
                    <a href="#" className="group relative z-10 inline-block">
                      <div className="btn is-large is-rounded is-violet">
                        Become an instructor
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </a>
                  </div>
                </div>
                {/* Content Block */}
                {/* Content Image Block */}
                <div
                  className="order-2 flex justify-center jos"
                  data-jos_animation="fade-left"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <img
                    src="assets/img/th-4/content-img-2.png"
                    alt="content-img-1"
                    width={450}
                    height={532}
                  />
                </div>
                {/* Content Image Block */}
              </div>
              {/* Content Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        <section className="section-testimonial">
          <div className="relative">
            {/* Section Container */}
            <div className="container-default">
              {/* Section Content Wrapper */}
              <div
                className="mb-[60px] xl:mb-20 jos"
                data-jos_once={1}
                data-jos_animation="fade-up"
                data-jos_timingfunction="ease"
                data-jos_duration="0.7"
                data-jos_delay="0.5"
                data-jos_counter={1}
              >
                {/* Section Content Block */}
                <div className="mx-auto max-w-[670px]">
                  <h2 className="text-center font-DmSans -tracking-[1px]">
                    Learners like you achieve their goals through our courses
                  </h2>
                </div>
                {/* Section Content Block */}
                {/* Testimonial Area */}
                <div className="grid gap-x-6 md:grid-cols-2">
                  {/* Testimonial Item  */}
                  <div className="flex flex-col gap-y-6 rounded-[10px] p-[30px]">
                    <div className="flex gap-x-2 text-3xl text-ColorYellow">
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="mb-0 text-ColorBlack">
                      "The online class professionals were truly a lifesaver.
                      Without their expertise and kind help I could not have
                      achieved the best results in my class. I followed what
                      they said and they helped me get the best grades."
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <img
                        src="assets/img/th-4/testimonial-avatar-1.png"
                        alt="testimonial-avatar-1"
                        width={69}
                        height={60}
                      />
                      <div>
                        <span className="block font-semibold text-ColorBlack">
                          Kristin Watson
                        </span>
                        <span className="text-sm leading-[1.42]">
                          Student of Cambridge University, UK
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Item  */}
                  {/* Testimonial Item  */}
                  <div className="flex flex-col gap-y-6 rounded-[10px] p-[30px]">
                    <div className="flex gap-x-2 text-3xl text-ColorYellow">
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                      <i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="mb-0 text-ColorBlack">
                      "I actually wanted to learn more than what was taught. I
                      knew I couldn't be a designer, but I wanted to at least
                      understand some of the basics. Then I bought UI / UX
                      design course &amp; completed the whole course now I am a
                      good designer.”
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <img
                        src="assets/img/th-4/testimonial-avatar-2.png"
                        alt="testimonial-avatar-2"
                        width={69}
                        height={60}
                      />
                      <div>
                        <span className="block font-semibold text-ColorBlack">
                          Kristin Watson
                        </span>
                        <span className="text-sm leading-[1.42]">
                          Student of Cambridge University, UK
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Item  */}
                </div>
                {/* Testimonial Area */}
              </div>
              {/* Section Content Wrapper */}
            </div>
            {/* Section Container */}
            {/* Background Divider Shape */}
            <div className="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
          </div>
        </section>
        {/*...::: Testimonial Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section className="section-FAQ">
          <div className="realative">
            {/* Section Background */}
            <div className="bg-[#F5EFEB]">
              {/* Section Space */}
              <div className="section-space">
                {/* Section Container */}
                <div className="container-default">
                  {/* FAQ Area */}
                  <div className="grid items-center gap-x-6 gap-y-10 md:grid-cols-2">
                    {/* Content Block */}
                    <div
                      className="jos"
                      data-jos_animation="fade-right"
                      data-jos_once={1}
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_delay="0.5"
                      data-jos_counter={1}
                    >
                      {/* Section Wrapper */}
                      <div>
                        {/* Section Block */}
                        <div className="mb-5">
                          <h2 className="font-DmSans -tracking-[1px]">
                            Frequently asked questions about our courses
                          </h2>
                        </div>
                        {/* Section Block */}
                      </div>
                      {/* Section Wrapper */}
                      <p>
                        We encourage our students and teachers to ask us any
                        questions regarding our courses and classes. Our skilled
                        mentors are ready to answer all your questions 24/7.
                      </p>
                    </div>
                    {/* Content Block */}
                    {/* FAQ Block */}
                    <div
                      className="flex justify-center jos"
                      data-jos_animation="fade-left"
                      data-jos_once={1}
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_delay="0.5"
                      data-jos_counter={1}
                    >
                      {/* Accordion List */}
                      <ul className="mx-auto max-w-[1076px] rounded-[10px] border-4 border-ColorBlack">
                        {/* Accordion Item */}
                        <li className="accordion-item active last:border-2-0 overflow-hidden border-b-4 border-ColorBlack p-[30px]">
                          {/* Accordion Header */}
                          <div className="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                            <button className="flex-1 text-left">
                              Q. How do I register for the online courses?
                            </button>
                            <div className="accordion-icon-2 absolute right-0 top-0">
                              <i className="fa-solid fa-chevron-down" />
                            </div>
                          </div>
                          {/* Accordion Header */}
                          {/* Accordion Body */}
                          <div className="accordion-body max-w-[826px] opacity-80">
                            <p className="pt-5">
                              Click the "register yourself" button to go to the
                              online catalog. Click the "add to cart" link for
                              one or more packages of courses.
                            </p>
                          </div>
                          {/* Accordion Body */}
                        </li>
                        {/* Accordion Item */}
                        {/* Accordion Item */}
                        <li className="accordion-item overflow-hidden border-b-4 border-ColorBlack p-[30px] last:border-b-0">
                          {/* Accordion Header */}
                          <div className="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                            <button className="flex-1 text-left">
                              Q. What is the time commitment for the courses?
                            </button>
                            <div className="accordion-icon-2 absolute right-0 top-0">
                              <i className="fa-solid fa-chevron-down" />
                            </div>
                          </div>
                          {/* Accordion Header */}
                          {/* Accordion Body */}
                          <div className="accordion-body max-w-[826px] opacity-80">
                            <p className="pt-5">
                              Click the "register yourself" button to go to the
                              online catalog. Click the "add to cart" link for
                              one or more packages of courses.
                            </p>
                          </div>
                          {/* Accordion Body */}
                        </li>
                        {/* Accordion Item */}
                        {/* Accordion Item */}
                        <li className="accordion-item overflow-hidden border-b-4 border-ColorBlack p-[30px] last:border-b-0">
                          {/* Accordion Header */}
                          <div className="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                            <button className="flex-1 text-left">
                              Q. Can I receive college credit for these courses?
                            </button>
                            <div className="accordion-icon-2 absolute right-0 top-0">
                              <i className="fa-solid fa-chevron-down" />
                            </div>
                          </div>
                          {/* Accordion Header */}
                          {/* Accordion Body */}
                          <div className="accordion-body max-w-[826px] opacity-80">
                            <p className="pt-5">
                              Click the "register yourself" button to go to the
                              online catalog. Click the "add to cart" link for
                              one or more packages of courses.
                            </p>
                          </div>
                          {/* Accordion Body */}
                        </li>
                        {/* Accordion Item */}
                      </ul>
                      {/* Accordion List */}
                    </div>
                    {/* FAQ Block */}
                  </div>
                  {/* FAQ Area */}
                </div>
                {/* Section Container */}
              </div>
              {/* Section Space */}
            </div>
            {/* Section Background */}
            {/* Background Divider Shape */}
            <div className="min-h-[65px] w-full rotate-180 bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
          </div>
        </section>
        {/*...::: FAQ Section End :::... */}
        {/*...::: Newsletter Section Start :::... */}
        <section className="section-newsletter">
          <div className="relative">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Newsletter Area */}
                <div
                  className="mx-auto flex max-w-[720px] flex-col justify-center text-center jos"
                  data-jos_once={1}
                  data-jos_animation="fade-up"
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <h2 className="mb-5 font-DmSans -tracking-[1px]">
                    Start learning today and expand your knowledge at any level
                  </h2>
                  <p className="mb-[50px]">
                    We have easily downloadable learning app on any device and
                    anywhere to experience an exclusive e-learning platform for
                    world-class education.
                  </p>
                  <div className="flex flex-wrap justify-center gap-5">
                    <a href="#" aria-label="apple-app-store">
                      <img
                        src="assets/img/icons/icon-round-apple-app-store.svg"
                        alt="icon-round-apple-app-store"
                        width={188}
                        height={60}
                      />
                    </a>
                    <a href="#" aria-label="google-play-store">
                      <img
                        src="assets/img/icons/icon-round-google-play-store.svg"
                        alt="icon-round-google-play-store"
                        width={188}
                        height={60}
                      />
                    </a>
                  </div>
                </div>
                {/* Newsletter Area */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* Background Divider Shape */}
            <div className="absolute bottom-0 left-0 -mb-px h-10 w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-cover bg-[center_top] bg-repeat-x xxl:h-14" />
          </div>
        </section>
        {/*...::: Newsletter Section End :::... */}
      </main>
      {/*...::: Footer Section Start :::... */}
      <footer className="section-footer">
        <div className="bg-[#F5EFEB]">
          {/* Footer Area Center */}
          <div className="text-ColorBlack">
            {/* Footer Center Spacing */}
            <div className="py-[60px] lg:py-20 xl:py-[100px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Footer Widget List */}
                <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                    {/* Footer Logo */}
                    <a href="/">
                      <img
                        src="assets/img/logo-violet-dark.png"
                        alt="Masco"
                        width={109}
                        height={24}
                      />
                    </a>
                    {/* Footer Content */}
                    <div>
                      {/* Footer About Text */}
                      <div className="lg:max-w-[416px]">
                        We are strategic &amp; creative digital agency who are
                        focused on user experience, mobile, social, data
                        gathering and promotional offerings.
                      </div>
                      {/* Footer Mail */}
                      <a
                        href="mailto:yourdemo@email.com"
                        className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                      >
                        yourdemo@email.com
                      </a>
                      {/* Footer Social Link */}
                      <div className="flex flex-wrap gap-5">
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="twitter"
                        >
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="facebook"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="instagram"
                        >
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <a
                          href="https://www.github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="github"
                        >
                          <i className="fa-brands fa-github" />
                        </a>
                      </div>
                    </div>
                    {/* Footer Content */}
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                    {/* Footer Widget Title */}
                    <div className="text-xl font-semibold capitalize">
                      Primary Pages
                    </div>
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/about"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/services"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/pricing"
                        >
                          pricing
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Utility pages
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/signup"
                        >
                          Signup
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/login"
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/error-404"
                        >
                          404 Not found
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/reset-password"
                        >
                          Password Reset
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item*/}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Resources
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Privacy policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Strategic finance
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Video guide
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                </div>
                {/* Footer Widget List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Center Spacing */}
          </div>
          {/* Footer Area Center */}
          <div className="horizontal-line bg-ColorBlack" />
          {/* Footer Bottom */}
          <div>
            {/* Footer Bottom Spacing */}
            <div className="py-[18px]">
              {/* Section Container */}
              <div className="container-default">
                <div className="text-center">
                  © Copyright 2024, All Rights Reserved by Mthemeus
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Bottom Spacing */}
          </div>
          {/* Footer Bottom */}
        </div>
      </footer>
      {/*...::: Footer Section End :::... */}
    </div>
  );
}
