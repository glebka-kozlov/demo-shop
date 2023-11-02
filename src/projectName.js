import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/main.scss";

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return "<span class=\"" + className + "\">" + (index + 1) + "</span>";
    },
  },
  modules: [Navigation, Pagination],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});