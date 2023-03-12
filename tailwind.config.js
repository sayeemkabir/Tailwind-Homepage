/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      "backgroundImage" : {
       'cyanbg' : "url('/media/bg-image.jpeg')"
      },

      "fontFamily" : {
        "fontRoboto" : ["Roboto", "Open Sans"],
        "ppBook" : ["NeueMontrealbook" , "Open Sans"],
        "ppBold" : ["NeueMontrealbold", "Open Sans"], 
        "ppMedium" : ["NeueMontrealmedium", "Open Sans"]
      },

      "fontSize" : {
        "custFont" : ['24px', '34px'],
        "normalText": ['18px', '28px'],
        "h2"  : ['46px', '52px'],
        "h3" : ['36px', '46px'],
        "smallText": ['14px', '24px'],
        "smlTitle" : ['22px', '32px'],
        "copyright" : ['16px', '26px']

      },

      "colors" :{
        "paleYellow" : "#FFFAA4",
        "givenCyan" : "#5CE4CA",
        "blacky" :"#003D31",
        "featBg" : "#FFFAE9",
        "darkPink" : "#FF7D7D",
        "lightPink" : "#FFBABA"
      },

      "spacing" : {
        "114" : "114px",
        "1170" : "1170px",
        "570" : "570px"
      },

      "borderRadius": {
        "figure" : "22px"
      },

      "container" : {
        "center" : true
      }

      

    },
  },
  plugins: [],
}
