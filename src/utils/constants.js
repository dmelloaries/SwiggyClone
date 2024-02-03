export const LOGO_URL =
  //"https://images.yourstory.com/cs/images/companies/logosC141575978425306png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6ENHFdif7crqg4KtrN6r6mDeM2hZ4NjJbg&usqp=CAU";

export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const ImgUrl =
  "https://corsproxy.org/?https%3A%2F%2Fmedia-assets.swiggy.com%2Fswiggy%2Fimage%2Fupload%2Ffl_lossy%2Cf_auto%2Cq_auto%2Cw_660%2F";

export const GET_RESTAURANTS_URL = process.env.REACT_APP_SWIGGY_API;

export const MENU_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4547767&lng=72.76143499999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
