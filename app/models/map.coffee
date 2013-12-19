map = L
  .mapbox
  .map('map', 'mccraigmccraig.map-gqkcbi1g')
  .fitBounds([
    [61,2.5],
    [48.7,-11.5]],
    {paddingTopLeft: [0,0], paddingBottomRight: [0,0]})

# pan the map to show all the bounds given
panToShow = (all_bounds...)->
  fb = _.first(all_bounds)
  fb_copy = new L.LatLngBounds(fb.getSouthWest(), fb.getNorthEast())

  super_bounds = _.reduce all_bounds, ((sb, bounds)->
    sb.extend bounds),
    fb_copy

  map.fitBounds(super_bounds) # unless map.getBounds().contains(super_bounds)

  if all_bounds.length == 1
    map.setZoom( map.getZoom() - 1)

exports.map = map
exports.panToShow = panToShow
