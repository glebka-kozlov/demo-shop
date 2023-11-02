import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/main.scss";

new Swiper(".swiper", {
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

var btnShopNow1Element = document.getElementById("btn-shop-now-1");
btnShopNow1Element.addEventListener("click", function () {

  new cpay.PaymentWidget().init({
    merchantId: "1b51360f-98d2-4336-a93e-4f72be2b2edd",
    invoice: {
      description: "test payment"
    },
    amount: {
      value: 0,
      currency: "USD"
    },
    paymentForm: {
      theme: "light",
      primaryColor: "#f79256",
      productCard: {
        title: "Nike Air Max 90 By You",
        description: "Lace up and add your touch to the sneaker revolution. Choose between classic leather or add a little summertime flair with canvas. Give it a makeover with your fave colors.",
        imageUrl: require("./images/nike-1-b.png")
      },
      fields: [
        {
          type: "input",
          name: "amount",
          label: "Amount",
          required: true
        }
      ]
    }
  });
});

var btnShopNow2Element = document.getElementById("btn-shop-now-2");
btnShopNow2Element.addEventListener("click", function () {

  new cpay.PaymentWidget().init({
    merchantId: "1b51360f-98d2-4336-a93e-4f72be2b2edd",
    invoice: {
      description: "test payment"
    },
    amount: {
      value: 0,
      currency: "USD"
    },
    paymentForm: {
      theme: "dark",
      primaryColor: "#599899",
      productCard: {
        title: "Nike Air Max 1 '87 By You",
        description: "Lace up and add your touch to the sneaker revolution. Choose between classic leather or add a little summertime flair with canvas. Give it a makeover with your fave colors.",
        imageUrl: require("./images/nike-2-b.png")
      },
      fields: [
        {
          type: "input",
          name: "amount",
          label: "Amount",
          required: true
        }
      ]
    }
  });
});

var btnShopNow3Element = document.getElementById("btn-shop-now-3");
btnShopNow3Element.addEventListener("click", function () {

  new cpay.PaymentWidget().init({
    merchantId: "569f837a-1034-4165-8ff2-3620b2bf6d8d",
    invoice: {
      description: "test payment"
    },
    amount: {
      value: 0,
      currency: "USD"
    },
    paymentForm: {
      theme: "light",
      primaryColor: "#60d394",
      productCard: {
        title: "Nike Pegasus Trail 4 GORE-TEX By You",
        description: "Lace up and add your touch to the sneaker revolution. Choose between classic leather or add a little summertime flair with canvas. Give it a makeover with your fave colors.",
        imageUrl: require("./images/nike-3-b.png")
      },
      fields: [
        {
          type: "input",
          name: "amount",
          label: "Amount",
          required: true
        }
      ]
    }
  });
});