import { useEffect } from 'react';
import * as $ from 'jquery';
import '../styles/landing.css';
import { Link, useNavigate } from 'react-router-dom';

const NavigationPage = () => {
  const tabContainerHeight = 70;
  let currentId = null;
  let currentTab = null;
  let lastScroll = 0;

  const onTabClick = (event, targetPath) => {
    event.preventDefault();
    navigate(targetPath);
  };

  const navigate = useNavigate();

  const onScroll = () => {
    checkHeaderPosition();
    findCurrentTabSelector();
    lastScroll = $(window).scrollTop();
  };

  const onResize = () => {
    if (currentId) {
      setSliderCss();
    }
  };

  const checkHeaderPosition = () => {
    const headerHeight = 75;
    if ($(window).scrollTop() > headerHeight) {
      $(".main-container").addClass("main-container--scrolled");
    } else {
      $(".main-container").removeClass("main-container--scrolled");
    }

    const offset =
      $(".main").offset().top +
      $(".main").height() -
      tabContainerHeight -
      headerHeight;

    if (
      $(window).scrollTop() > lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".main-container").addClass("main-container--move-up");
      $(".main-container").removeClass("main-container--top-first");
      $(".main-container").addClass("main-container--top-second");
    } else if (
      $(window).scrollTop() < lastScroll &&
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
  };

  const findCurrentTabSelector = () => {
    let newCurrentId = null;
    let newCurrentTab = null;
  
    $(".main-tab").each(function () {
      const id = $(this).attr("to");
  
      if ($(`[to="${id}"]`).length) {
        const offsetTop = $(`[to="${id}"]`).offset().top - tabContainerHeight;
        const offsetBottom =
          $(`[to="${id}"]`).offset().top + $(`[to="${id}"]`).height() - tabContainerHeight;
  
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      }
    });
  
    if (currentId !== newCurrentId || currentId === null) {
      currentId = newCurrentId;
      currentTab = newCurrentTab;
      setSliderCss();
    }
  };

  const setSliderCss = () => {
    let width = 0;
    let left = 0;

    if (currentTab) {
      width = currentTab.css("width");
      left = currentTab.offset().left;
    }

    $(".main-tab-slider").css("width", width);
    $(".main-tab-slider").css("left", left);
  };



  return (
    <>
      <div className="main-container">
        <Link to="/about" className="main-tab">
          About us
        </Link>
        <Link to="/courses" className="main-tab">
          Courses
        </Link>
        <Link to="/teachers" className="main-tab">
          Teachers
        </Link>
        <Link to="/qa" className="main-tab">
          Q&A
        </Link>
        <Link to="/app" className="main-tab">
          Login
        </Link>
      </div>
      <section className="main">
        <img src="..//Assets/logo.svg" className="logo" alt="Logo" />
        <h1>Welcome to</h1>
        <h3 className="span loader">
          <span className="m">B</span>
          <span className="m">U</span>
          <span className="m">S</span>
          <span className="m">I</span>
          <span className="m">N</span>
          <span className="m">E</span>
          <span className="m">S</span>
          <span className="m">S</span>
          <span className="m">&nbsp;</span>
          <span className="m">L</span>
          <span className="m">A</span>
          <span className="m">N</span>
          <span className="m">G</span>
          <span className="m">U</span>
          <span className="m">A</span>
          <span className="m">G</span>
          <span className="m">E</span>
          <span className="m">&nbsp;</span>
          <span className="m"></span>
          <span className="m">C</span>
          <span className="m">H</span>
          <span className="m">A</span>
          <span className="m">N</span>
          <span className="m">N</span>
          <span className="m">E</span>
          <span className="m">L</span>
        </h3>
      </section>
    </>
  );
};

export default NavigationPage;