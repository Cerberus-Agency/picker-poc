// Reference the color shape that was drawn over the image
const overlay = document.getElementById("product-shape");

// Click on a color

var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  // set the hex color
  overlay.style.fill = hex;
}


var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

var CircleMask = function () {
          console.log(this);
           // * [constructor description]
           // * @return {[type]} [description]
           
          function CircleMask() {_classCallCheck(this, CircleMask);
            this.$item = $('svg.js-circleMask');

            if (this.$item.length == 0) {
              return;
            }
            this.set();
          }_createClass(CircleMask, [{ key: 'set', value: function set()

            {var _this = this;
              var w = 0;
              var h = 0;
              var $svg = null;
              var $mask = null;
              var $image = null;

              this.$item.each(function (i, v) {
                $svg = $(v);
                $mask = $svg.find('.js-circleMask-mask');
                $image = $svg.find('.js-circleMask-image');
                w = parseInt($svg.width(), 0);
                h = parseInt($svg.height(), 0);

                $svg.attr('viewBox', '0 0 ' + w + ' ' + h);
                $svg.attr('width', w);
                $svg.attr('height', h);

                $mask.attr('cx', w / 2);
                $mask.attr('cy', h / 2);

                $image.attr('width', w);
                $image.attr('height', h);

                console.log('$image', $image.attr('xlink:href'));

                var image = new Image();
                image.onload = function () {
                  _this.play($svg);
                };
                image.src = $image.attr('xlink:href');
              });
            } }, { key: 'play', value: function play(
            $svg) {
              console.log('play', $svg);
              var $mask = $svg.find('.js-circleMask-mask');
              var w = $svg.width();

              TweenMax.to($mask[0], 2.5, {
                attr: {
                  r: w },

                ease: Power4.easeInOut });

            } }]);return CircleMask;
    }();
 

        $(function () {
         // new CircleMask();
        });

var boxLink = $('.click');  
          console.log($(this));
        boxLink.click( function() {  
        new CircleMask();
            if (!$(this).hasClass('active'))    {
                boxLink.removeClass('active');
                $(this).addClass('active');  
            }   
        });
