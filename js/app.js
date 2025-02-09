$(document).ready(function () {
  /////////////////////////////////////
  //        CAROUSEL SWIPE           //
  /////////////////////////////////////

  var $sweetworldcarousel = $("#sweet-world-carousel");

  $sweetworldcarousel.swiperight(function () {
    $(this).carousel("prev");
  });
  $sweetworldcarousel.swipeleft(function () {
    $(this).carousel("next");
  });

  //////////////////////////////////////
  //          SNIPPETS                //
  //////////////////////////////////////
  (function () {
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $("html, body").stop().animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        "swing"
      );
    });
  })();

  /////////////////////////////////////
  //      MODAL WINDOW GALLERY       //
  /////////////////////////////////////
  $(".gallery-item").on("click", function () {
    var label = $("#myModalLabel");
    var img = $("#showcase-img");
    var price = $("#modal-price-tag");
    var body = $("#modalBody");
    var dataModel = $(this).find("img");
    var modelfeats = $("#model-feats").find("li");

    label.text("Sweet World: " + $(this).find("#item-name-caption").text());
    price.text($(this).find("#item-price-caption").text());
    img.attr("src", dataModel.attr("src"));
  });

  $(
    "div#item-1, div#item-2, div#item-3, div#item-4,div#item-5, div#item-6, div#item-7, div#item-8,div#item-9, div#item-10, div#item-11, div#item-12"
  ).on("click", function () {
    $("img#showcase-img").addClass("thumb-50");
    $("ul#model-feats").addClass("hide");
  });

  /////////////////////////////////////
  //          GOOGLE MAPS            //
  /////////////////////////////////////
  var map = new GMaps({
    div: "#gmaps",
    lat: 37.9838096,
    lng: 23.7275388,
    zoom: 14,
  });

  var styles = [
    {
      elementType: "labels",
      stylers: [{ visibility: "off" }, { color: "#f49f53" }],
    },
    {
      featureType: "landscape",
      stylers: [{ color: "#f9ddc5" }, { lightness: -7 }],
    },
    { featureType: "road", stylers: [{ color: "#813033" }, { lightness: 43 }] },
    {
      featureType: "poi.business",
      stylers: [{ color: "#645c20" }, { lightness: 38 }],
    },
    {
      featureType: "water",
      stylers: [
        { color: "#1994bf" },
        { saturation: -69 },
        { gamma: 0.99 },
        { lightness: 43 },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        { color: "#f19f53" },
        { weight: 1.3 },
        { visibility: "on" },
        { lightness: 16 },
      ],
    },
    { featureType: "poi.business" },
    {
      featureType: "poi.park",
      stylers: [{ color: "#645c20" }, { lightness: 39 }],
    },
    {
      featureType: "poi.school",
      stylers: [{ color: "#a95521" }, { lightness: 35 }],
    },
    {
      featureType: "poi.medical",
      elementType: "geometry.fill",
      stylers: [{ color: "#813033" }, { lightness: 38 }, { visibility: "off" }],
    },
    {},
    {},
    {},
    {},
    {},
    { elementType: "labels" },
    {
      featureType: "poi.sports_complex",
      stylers: [{ color: "#9e5916" }, { lightness: 32 }],
    },
    {
      featureType: "poi.government",
      stylers: [{ color: "#9e5916" }, { lightness: 46 }],
    },
    { featureType: "transit.station", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit.line",
      stylers: [{ color: "#813033" }, { lightness: 22 }],
    },
    { featureType: "transit", stylers: [{ lightness: 38 }] },
    {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [{ color: "#f19f53" }, { lightness: -10 }],
    },
    {},
  ];

  map.setOptions({ styles: styles });

  map.addMarker({
    lat: 37.9838096,
    lng: 23.7275388,
    title: "Athens HQ",
    infoWindow: {
      content:
        "<p>Our headquarters and main workshop situated in beautiful Athens &hearts; Come see us!</p>",
    },
  });
});

/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded", function () {
  var div,
    n,
    v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = labnolThumb(v[n].dataset.id);
    div.onclick = labnolIframe;
    v[n].appendChild(div);
  }
});

function labnolThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

function labnolIframe() {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}

/////////////////////////////////////
//   CHANGE CLASSES RESPONSIVE     //
/////////////////////////////////////
$(window)
  .resize(function () {
    var width = $(window).width();
    if (width >= 300 && width <= 1024) {
      $("#item-1, #item-2, #item-3, #item-4")
        .removeClass("col-sm-3 col-xs-5")
        .addClass("col-sm-5 col-xs-12");
      $("#item-2").removeClass("col-xs-offset-2").addClass("col-xs-offset-0");
      $("#item-3").removeClass("col-sm-offset-1");
      $("#item-5, #item-6, #item-7, #item-8")
        .removeClass("col-sm-3 col-xs-5")
        .addClass("col-sm-5 col-xs-12");
      $("#item-6").removeClass("col-xs-offset-2").addClass("col-xs-offset-0");
      $("#item-7").removeClass("col-sm-offset-1");
      $("#item-9, #item-10, #item-11, #item-12")
        .removeClass("col-sm-3 col-xs-5")
        .addClass("col-sm-5 col-xs-12");
      $("#item-10").removeClass("col-xs-offset-2").addClass("col-xs-offset-0");
      $("#item-11").removeClass("col-sm-offset-1");
    } else {
      $("#item-1, #item-2, #item-3, #item-4")
        .removeClass("col-sm-5 col-xs-12")
        .addClass("col-sm-3 col-xs-5");
      $("#item-4").removeClass("col-sm-offset-3").addClass("col-sm-offset-1");
      $("#item-2").removeClass("col-xs-offset-0").addClass("col-xs-offset-2");
      $("#item-3").addClass("col-sm-offset-1");
      $("#item-5, #item-6, #item-7, #item-8")
        .removeClass("col-sm-5 col-xs-12")
        .addClass("col-sm-3 col-xs-5");
      $("#item-8").removeClass("col-sm-offset-3").addClass("col-sm-offset-1");
      $("#item-6").removeClass("col-xs-offset-0").addClass("col-xs-offset-2");
      $("#item-7").addClass("col-sm-offset-1");
      $("#item-9, #item-10, #item-11, #item-12")
        .removeClass("col-sm-5 col-xs-12")
        .addClass("col-sm-3 col-xs-5");
      $("#item-12").removeClass("col-sm-offset-3").addClass("col-sm-offset-1");
      $("#item-10").removeClass("col-xs-offset-0").addClass("col-xs-offset-2");
      $("#item-11").addClass("col-sm-offset-1");
    }
  })
  .resize(); //trigger the resize event on page load.

/////////////////////////////////////
//        STOP PINCH ZOOM          //
/////////////////////////////////////
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

/////////////////////////////////////
//         CAROUSEL FADE           //
/////////////////////////////////////
$(".carousel").carousel();
