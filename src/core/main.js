/* This is the game's code. Edit, give credit! */
var appFrame = document.getElementById("app");
bonsai.run(appFrame, width, height, {
  code: function() {
    var player = new Bitmap('player_version1.png').on('load', function() {
            this.addTo('stage'); 
          });
    //var player = new Rect(10, 10, 100, 100);
      //player.addTo(stage);
      //player.attr('fillColor', 'green');
  },
        width: appFrame.width,
        height: appFrame.height
    });