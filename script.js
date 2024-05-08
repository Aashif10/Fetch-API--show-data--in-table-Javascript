fetch("https://fakestoreapi.com/products")
  .then(data => {
    return data.json();
  })
  .then(objectData => {
    console.log(objectData[0]);
    let tableData = "";
    objectData.map(value => {
      tableData+= `<tr>
      <td>${value.id}</td>
      <td>${value.title}</td>
      <td>${value.price}</td>
      <td>/${value.category}</td>
      <td>${value.rating.rate}</td>
      <td>${value.rating.count}</td>
      </tr>`;
    });
    document.getElementById("userData").innerHTML = tableData;
  });
  