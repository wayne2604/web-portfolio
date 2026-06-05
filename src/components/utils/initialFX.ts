import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.02,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var skillElements = gsap.utils.toArray(".landing-skill") as HTMLElement[];
  var landingSkills = skillElements.map(el => new SplitText(el, TextProps));

  applyGradientToSkills(skillElements);
  window.addEventListener("resize", () => {
    applyGradientToSkills(skillElements);
  });

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  LoopSkills(landingSkills);
}

function applyGradientToSkills(skillElements: HTMLElement[]) {
  skillElements.forEach((target) => {
    if (!target) return;

    const gradientTextWrapper = target.querySelector(".gradient-text");
    if (!gradientTextWrapper) return;

    const chars = Array.from(gradientTextWrapper.querySelectorAll("div")) as HTMLElement[];
    if (chars.length === 0) return;

    const parentRect = gradientTextWrapper.getBoundingClientRect();
    const W = parentRect.width;

    chars.forEach((charEl) => {
      const charRect = charEl.getBoundingClientRect();
      const X = charRect.left - parentRect.left;

      // Apply horizontal gradient stretching across the entire word
      charEl.style.backgroundImage = "linear-gradient(to right, #A7D129, #000000)";
      charEl.style.backgroundSize = `${W}px 100%`;
      charEl.style.backgroundPosition = `${-X}px 0px`;
      charEl.style.backgroundRepeat = "no-repeat";
      charEl.style.webkitBackgroundClip = "text";
      charEl.style.webkitTextFillColor = "transparent";
      charEl.style.backgroundClip = "text";
      charEl.style.color = "transparent";
    });
  });
}

function LoopSkills(skills: any[]) {
  if (skills.length === 0) return;

  skills.forEach((skill, index) => {
    if (index !== 0) {
      gsap.set(skill.chars, { opacity: 0, top: 80 });
    }
  });

  gsap.fromTo(
    skills[0].chars,
    { opacity: 0, top: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      top: 0,
      stagger: 0.02,
      delay: 0.6,
    }
  );

  var tl = gsap.timeline({ repeat: -1, delay: 4 });
  const delay = 3;

  skills.forEach((skill, index) => {
    let nextSkill = skills[(index + 1) % skills.length];

    tl.to(
      skill.chars,
      { opacity: 0, top: -80, duration: 1, ease: "power3.inOut", stagger: 0.02 }
    )
    .fromTo(
      nextSkill.chars,
      { opacity: 0, top: 80 },
      { opacity: 1, top: 0, duration: 1, ease: "power3.inOut", stagger: 0.02 },
      "<0.3"
    )
    .set({}, {}, `+=${delay}`);
  });
}
