export const LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BG_IMAGE="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const USER_AVATAR="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGE=[
  {
    identifier:"en",name:"English",
  },
  {identifier:"hindi",name:"Hindi"},
  {identifier:"bhojpuri",name:"Bhojpuri"}
] 

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY