/* This is the game's code. Edit, give credit! */
      var appFrame = document.getElementById("app");
      bonsai.run(appFrame, {
        code: function() {
          new Rect(10, 10, 100, 100)
            .addTo(stage);
            .attr('fillColor', 'green');
        width: appFrame.width,
        height: appFrame.height
        }
      });