$(document).ready(function () {
  //* add header to product page
  $("#headerContainer").load("./components/header.html #header");

  //* generate rating stars dynamic
  $(".rating-container").each(function () {
    var data = $(this).data("value");
    var starsHtml = generateRatingStars(data);
    $(this).html(starsHtml);
  });

  function generateRatingStars(rating) {
    var html = "";
    for (var i = 0; i < 5; i++) {
      if (i < rating) {
        html += `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.9918 8.42486C23.8379 7.96001 23.4157 7.62985 22.9162 7.58589L16.1309
                         6.98425L13.4478 0.851691C13.25 0.402254 12.7994 0.111328 12.2988 0.111328C11.7982 0.111328 11.3477 0.402254
                          11.1498 0.852742L8.46675 6.98425L1.68039 7.58589C1.18176 7.63091 0.76062 7.96001 0.60583 8.42486C0.45104 8.88971
                           0.593992 9.39958 0.971191 9.72098L6.10006 14.1134L4.58768 20.619C4.47701 21.0974 4.66714 21.5918 5.07357 21.8787C5.29203 22.0329 5.54763
                            22.1113 5.80537 22.1113C6.0276 22.1113 6.24804 22.0528 6.44587 21.9372L12.2988 18.5213L18.1496
                            21.9372C18.5778 22.1887 19.1175 22.1658 19.523 21.8787C19.9296
                            21.591 20.1196 21.0963 20.0089 20.619L18.4965 14.1134L23.6254 9.72186C24.0026 9.39958 24.1466 8.89059 23.9918 8.42486Z" fill="#FFCB31"/>
                        </svg>`;
      } else {
        html += `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.9918 8.42486C23.8379 7.96001 23.4157 7.62985 22.9162 7.58589L16.1309 6.98425L13.4478 0.851691C13.25
                         0.402254 12.7994 0.111328 12.2988 0.111328C11.7982 0.111328 11.3477 0.402254 11.1498 0.852742L8.46675 6.98425L1.68039
                          7.58589C1.18176 7.63091 0.76062 7.96001 0.60583 8.42486C0.45104 8.88971 0.593992 9.39958 0.971191 9.72098L6.10006 
                          14.1134L4.58768 20.619C4.47701 21.0974 4.66714 21.5918 5.07357 21.8787C5.29203 22.0329 5.54763 22.1113 5.80537 22.1113C6.0276 22.1113 6.24804 22.0528 6.44587 
                          21.9372L12.2988 18.5213L18.1496 21.9372C18.5778 22.1887 19.1175 22.1658 19.523 21.8787C19.9296 21.591 20.1196 21.0963 20.0089 20.619L18.4965 14.1134L23.6254
                           9.72186C24.0026 9.39958 
                          24.1466 8.89059 23.9918 8.42486Z" fill="#E6EAEF"/>
                        </svg>`;
      }
    }
    return html;
  }

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    autoWidth: false,
    nav: true,
    items: 1,
    // loop:true,
    margin: 10,
    singleItem: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});
