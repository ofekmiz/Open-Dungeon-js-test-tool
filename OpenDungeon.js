var dungeon = dungeon || {};
dungeon.drawJson = function (id, json) {
  const elem = document.getElementById(id);
  elem.innerHTML = convertJsonToPinker(json);
  pinker.render();
};

dungeon.drawPinker = function (id, pinkerText) {
  const elem = document.getElementById(id);
  elem.innerHTML = pinkerText;
  pinker.render();
};

function convertJsonToPinker(json) {
  dungeonJson = JSON.parse(json);
}
