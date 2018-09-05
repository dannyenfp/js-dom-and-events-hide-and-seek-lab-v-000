function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
 
for (let i = 0; i < rankedLists.length; i++) {
  rankedLists[i].innerHTML = (i + n).toString();
}
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
    var nodes = document.querySelectorAll(`#${id} ${element}`);
  if(!nodes.length) return false;
  return nodes[nodes.length-1];
}