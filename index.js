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
  
  //return grandNode[grandNode.length- 1];
  //return grandNode;
 // this is the brute force way: return grandNode.children[0].children[0].children[0].children[0];

  let nodeToExamine = grandNode;
  let nodeToExamineLater = nodeToExamine.children[0]; 
  
    while (nodeToExamineLater) {
      nodeToExamine = nodeToExamineLater;
      nodeToExamineLater = nodeToExamineLater.children[0];
    }
    
    return nodeToExamine;
}