
Module.register("MMM-RadioDe",{

    // due to usage of suspend & resume subclass
    requiresVersion: "2.1.0",


    // Default module config.
    defaults: {
    api_key: false,
    station: 'antennekids',
    autoplay: "true",
    player_color: "61ce42", //does not have any influence
    height:"92", // in pixel
    width:"360", // in pixel
    // volume:"70%" not yet implemented, to be done in later version
    },
    display: true,
    all_started: false,


    // Subclass start method.
    start: function() {
        Log.info("Starting module: " + this.name);
        //Log.info("Setting System Volume to " + this.config.volume);
        //exec("amixer -q sset Master " + this.config.volume, null);
    },

    notificationReceived: function (notification, payload, sender) {
      if(notification === "ALL_MODULES_STARTED"){
        this.all_started = true;
        Log.info("Received notification ALL_MODULES_STARTED setting all_started to  : " + this.all_started);
      }else if(notification === "RADIO_STATION"){
        Log.info("Received RADIO_STATION " + payload.title + "   "+ payload.type);
        this.config.station = payload.title;
        this.updateDom();
      }
    },


    getDom: function() {
      var wrapper = document.createElement("div");
      if (this.display && this.all_started) {

        var script = document.createElement("div");
        script.innerHTML = "<div class=\"ng-app-embedded\"><div style=\"display:none;\" class=\"\" data-playertype=\"web_embedded\" data-playstation=\"antennekids\" data-autoplay=\"false\" data-playercolor=\"" + this.config.player_color + "\" data-apikey=\"" + this.config.api_key + "\" data-iframe=\"true\"></div><iframe src=\"http://radio.de/inc/microsite/index.html?playerWidth="+ this.config.width +"px&amp;playerHeight="+ this.config.height + "px&amp;playerType=web_embedded&amp;partnerLogo=null&amp;partnerUrl=null&amp;partnerBacklink=null&amp;partnerName=null&amp;popoutTitle=null&amp;stations=null&amp;listText=null&amp;listSubtext=null&amp;playerColor=" + this.config.player_color + "&amp;showFooter=null&amp;token=null&amp;playStation=" + this.config.station + "&amp;apikey=" + this.config.api_key + "&amp;popupWidth=null&amp;popupHeight=null&amp;autoplay=" + this.config.autoplay + "&amp;iframe=true\" id=\"radioDeIframe0\" name=\"radioDeIframe0\" frameborder=\"0\" style=\"width: "+ this.config.width +"px; height: "+ this.config.height + "px;\" height=\""+this.config.height+"\" width=\""+this.config.height+"\"></iframe></div>";

        // original script code for testing of 403 error on console
        //script.innerHTML = "<div class=\"ng-app-embedded\"><div style=\"display:none;\" class=\"\" data-playertype=\"web_embedded\" data-playstation=\"antennekids\" data-autoplay=\"false\" data-playercolor=\"61ce42\" data-apikey=\"df04ff67dd3339a6fc19c9b8be164d5b5245ae93\" data-iframe=\"true\"></div><iframe src=\"http://antennekids.radio.de/inc/microsite/index.html?playerWidth=360px&amp;playerHeight=92px&amp;playerType=web_embedded&amp;partnerLogo=null&amp;partnerUrl=null&amp;partnerBacklink=null&amp;partnerName=null&amp;popoutTitle=null&amp;stations=null&amp;listText=null&amp;listSubtext=null&amp;playerColor=61ce42&amp;showFooter=null&amp;token=null&amp;playStation=antennekids&amp;apikey=df04ff67dd3339a6fc19c9b8be164d5b5245ae93&amp;popupWidth=null&amp;popupHeight=null&amp;autoplay=true&amp;iframe=true\" id=\"radioDeIframe0\" name=\"radioDeIframe0\" frameborder=\"0\" style=\"width: 360px; height: 92px;\" height=\"92\" width=\"360\"></iframe></div>";


        wrapper.appendChild(script);
        }

      return wrapper;
  	  },

      suspend: function(){
        this.display = false;
        this.updateDom();
      },

      resume: function(){
        this.display = true;
        this.updateDom();
      },



});
