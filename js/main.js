



/* Preloader */
$(window).on('load', function() {
	var preloaderFadeOutTime = 500;
	function hidePreloader() {
		var preloader = $('.spinner-wrapper');
		setTimeout(function() {
			preloader.fadeOut(preloaderFadeOutTime);
		}, 500);
	}
	hidePreloader();
});

var stringifyObject = require('stringify-object')
var createKeyframe = require('create-keyframe')
var insertCSS = require('insert-styles')

function generateKeyframe () {
 // var randomColors = createRandomColors()

  var shakeDistance = Number(
   (Math.random() * 70).toFixed(0)
  ) + 30

  var cssKeyframe
  cssKeyframe = {
    0: {
      transform: 0+'deg'
    },
    100: { transform: 30+'deg' }
  }
  var keyframeObj = createKeyframe(cssKeyframe)
  insertCSS(keyframeObj.css, {id: 'animaton-tutorial-keyframe'})

  jsonDisplay.innerHTML = `@keyframe ${keyframeObj.name} ` +
   stringifyObject(cssKeyframe, {indent: '  '})
  userMessage.style.animation = keyframeObj.name + ' ease 3s infinite'
}

generateKeyframe();