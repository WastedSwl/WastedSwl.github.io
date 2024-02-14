
let typeSplit;
function allTextSplit() {
  typeSplit = new SplitType(".on-scroll_heading, .on-scroll_details", {
    types: "lines"
  });
  $(".line").append("<div class='line-mask'></div>");
  createAnimation();
}
allTextSplit();

// Update text split on screen size resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    allTextSplit();
  }
});

// All GSAP code starts
gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  $(".on-scroll_content-wrapper").each(function (index) {
    let onScrollTextLineAnm = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 90%",
        toggleActions: "play none none reverse",
        markers: true
      }
    });
    onScrollTextLineAnm
      .fromTo(
        $(this),
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.in"
        }
      )
      .to($(this).find(".line-mask"), {
        width: "0%",
        duration: 1,
        stagger: { each: 0.08, from: "start" }
      });
  });
}
