
Module.register("MMM-RadioDe",{
    // Default module config.
    defaults: {
    api_key: false,
    station: 'antennekids',
    autoplay: "true",
    player_color: "61ce42", //does not have any influence
    height:"92", // in pixel
    width:"360", // in pixel
    // volume:"70%" not yet implemented
    },
    display: true,


    // Subclass start method.
    start: function() {
        Log.info("Starting module: " + this.name);
        //Log.info("Setting System Volume to " + this.config.volume);
        //exec("amixer -q sset Master " + this.config.volume, null);
    },


    getDom: function() {
      var wrapper = document.createElement("div");
      if (this.display) {

        var script = document.createElement("div");
        script.innerHTML = "<div class=\"ng-app-embedded\"><div style=\"display:none;\" class=\"\" data-playertype=\"web_embedded\" data-playstation=\"antennekids\" data-autoplay=\"false\" data-playercolor=\"" + this.config.player_color + "\" data-apikey=\"" + this.config.api_key + "\" data-iframe=\"true\"></div><iframe src=\"http://radio.de/inc/microsite/index.html?playerWidth="+ this.config.width +"px&amp;playerHeight="+ this.config.height + "px&amp;playerType=web_embedded&amp;partnerLogo=null&amp;partnerUrl=null&amp;partnerBacklink=null&amp;partnerName=null&amp;popoutTitle=null&amp;stations=null&amp;listText=null&amp;listSubtext=null&amp;playerColor=" + this.config.player_color + "&amp;showFooter=null&amp;token=null&amp;playStation=" + this.config.station + "&amp;apikey=" + this.config.api_key + "&amp;popupWidth=null&amp;popupHeight=null&amp;autoplay=" + this.config.autoplay + "&amp;iframe=true\" id=\"radioDeIframe0\" name=\"radioDeIframe0\" frameborder=\"0\" style=\"width: "+ this.config.width +"px; height: "+ this.config.height + "px;\" height=\""+this.config.height+"\" width=\""+this.config.height+"\"></iframe></div>";

        wrapper.appendChild(script);
        }

      return wrapper;
  	  },

      suspend: function(){
        this.display = false;
        this.updateDom(300);
      },

      resume: function(){
        this.display = true;
        this.updateDom(300);
      },



});
