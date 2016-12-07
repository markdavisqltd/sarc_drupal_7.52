(function ($) {

	var mapStyles = [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"on"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}];

	var setMapStyles = function (mapid, styles) {
	  var mapids = (mapid instanceof Array) ? mapid : [ mapid ];
	  for (var i in mapids) {
	    if ($('.' + mapids[i]).length) {
	      var gmap = Drupal.gmap.getMap(mapids[i]);
	      if (typeof(gmap.map) != 'undefined') {
	        gmap.map.setOptions({styles: styles});
	      }
	      else {
	        var args = {
	          gmap: gmap,
	          styles: styles
	        };
	        args.iid = window.setInterval(function(args) {
	          if (typeof(args.gmap.map) != 'undefined') {
	            window.clearInterval(args.iid);
	            args.gmap.map.setOptions({styles: args.styles});
	          }
	        }, 20, args);
	      }
	    }
	  }
	}

	Drupal.behaviors.site = {
	  attach: function (context, settings) {
	    var maps = [
	      'gmap-auto1map-gmap', // Names used by GMap Location
	      'gmap-auto2map-gmap',
	      'gmap-auto3map-gmap'
	    ];
	    setMapStyles(maps, mapStyles);
	  }
	}; 

})(jQuery);