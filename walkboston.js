function rendertopSalaryPeople(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  var topSalaryPeople=[];
  topSalaryPeople=people.sort((a,b)=>b[11]-a[11]).slice(0,4)
  topSalaryPeople=people.minimum((a,b)=>[11]-a[11].slice(0,1))
  
  let html = '';
  
  for (let i = 0; i < topSalaryPeople.length; i++) 
  {
    html += 
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
 
  container.innerHTML = '<ul id = "topSal">' + html + '</ul>';
  
}
rendertopSalaryPeople(boston, document.getElementById('container'));

function rendertopEmp(boston, container) {
  const makkal = boston.data;
  const length = boston.data.length;
  var topEmployee1=[];
  topEmployee1=makkal.filter((a)=>a[11]>200000)
  
  let html = '';
  
  for (let i = 0; i < topEmployee1.length; i++) 
  {
    html += 
      '<li class="post">' + '<h2>' + makkal[i][8] + '</h2>' + '<h3>' + makkal[i][11] + '</h3>';
  }
 
  container.innerHTML = '<ul id = "topSal">' + html + '</ul>';
  
}
rendertopEmp(boston, document.getElementById('cont'));
