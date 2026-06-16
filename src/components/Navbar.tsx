import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/logo-rwm.svg" alt="RWM" style={{ height: 28 }} />
        </a>

        <label className="hamburger" data-cursor="disable">
          <input
            type="checkbox"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <svg viewBox="0 0 32 32">
            <path
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              className="line line-top-bottom"
            />
            <path d="M7 16 27 16" className="line" />
          </svg>
        </label>

        <ul className={isOpen ? "nav-open" : ""}>
          <li>
            <a data-href="#about" href="#about" onClick={() => setIsOpen(false)}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#experience" href="#experience" onClick={() => setIsOpen(false)}>
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={() => setIsOpen(false)}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          
          <li>
            <a data-href="#contact" href="#contact" onClick={() => setIsOpen(false)}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
