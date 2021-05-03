document.addEventListener('DOMContentLoaded', () => {
  let coordinateX = document.querySelector('.coordinates .coordinates_x span');
  let coordinateY = document.querySelector('.coordinates .coordinates_y span');

  let coordinateTileX = document.querySelector('.coordinates--tile .coordinates_x span');
  let coordinateTileY = document.querySelector('.coordinates--tile .coordinates_y span');
  let tiles = document.querySelectorAll('.tile');

  document.addEventListener('mousemove', (e) => {
    coordinateX.innerHTML = e.x;
    coordinateY.innerHTML = e.y;
  })

  let tileInnerGradientPosition = '0 0';
  let tileInnerColors = '#ba9aed, #ab8fd9, #9c83c5, #8e78b2, #806d9f';
  let tileInnerBG = `background: radial-gradient(at ${tileInnerGradientPosition}, ${tileInnerColors}`;
  let tile3 = document.querySelector('[data-tile-number="3"]');
  var rect = tile3.getBoundingClientRect();

  tile3.addEventListener('mousemove', (e) => {
    // coordinateTileX.innerHTML = 
    let hoverX = ((e.x - rect.left) / tile3.offsetWidth) * 100;
    // coordinateTileY.innerHTML = 
    let hoverY = ((e.y - rect.top) / tile3.offsetHeight) * 100;
    let tileInnerGradientPosition = `${hoverX}% ${hoverY}%`;
    let tileInnerColors = '#ba9aed, #ab8fd9, #9c83c5, #8e78b2, #806d9f';
    let tileInnerBG = `radial-gradient(at ${tileInnerGradientPosition}, ${tileInnerColors}`;
    tile3.style.background = tileInnerBG;
  })

  console.log(rect.top, rect.left);
  for (tileID in tiles) {
    if (tiles.hasOwnProperty(tileID)) {
      tiles[tileID].addEventListener('mousemove', (e) => {
        let item = tiles[tileID];
        coordinateX.innerHTML = e.x;
        coordinateY.innerHTML = e.y;
        let closestElement = e.target.closest(".tile");
        // console.log(closestElement.dataset.tileNumber);

      })
    }
  }
});