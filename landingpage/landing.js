/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/

class NavigationPage {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;
    $(".main-tab").click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
    $(window).resize(() => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let href = element.attr("href");
    if (href.startsWith("/")) {
      // Если href начинается с '/', то это ссылка на другой ресурс,
      // и мы не должны пытаться прокрутить страницу к этому элементу.
      // Вместо этого, просто перенаправляем пользователя на новую страницу.
      window.location.href = href;
    } else {
      let target = $(href);
      if (target.length) {
        let scrollTop = target.offset().top - this.tabContainerHeight + 1;
        $("html, body").animate({ scrollTop: scrollTop }, 600);
      }
    }
  }

  onScroll() {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = $(window).scrollTop();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkHeaderPosition() {
    const headerHeight = 75;
    if ($(window).scrollTop() > headerHeight) {
      $(".main-container").addClass("main-container--scrolled");
    } else {
      $(".main-container").removeClass("main-container--scrolled");
    }
    let offset =
      $(".main").offset().top +
      $(".main").height() -
      this.tabContainerHeight -
      headerHeight;
    if (
      $(window).scrollTop() > this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".main-container").addClass("main-container--move-up");
      $(".main-container").removeClass("main-container--top-first");
      $(".main-container").addClass("main-container--top-second");
    } else if (
      $(window).scrollTop() < this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".main-container").removeClass("main-container--move-up");
      $(".main-container").removeClass("main-container--top-second");
      $(".main-container-container").addClass("main-container--top-first");
    } else {
      $(".main-container").removeClass("main-container--move-up");
      $(".main-container").removeClass("main-container--top-first");
      $(".main-container").removeClass("main-container--top-second");
    }
  }

  findCurrentTabSelector() {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $(".main-tab").each(function () {
      let id = $(this).attr("href");
      // Check if the element exists before accessing its properties
      if (id.startsWith("#") && $(id).length) {
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom =
          $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css("width");
      left = this.currentTab.offset().left;
    }
    $(".main-tab-slider").css("width", width);
    $(".main-tab-slider").css("left", left);
  }
}

new NavigationPage();
/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/
