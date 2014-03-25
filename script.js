var form = document.getElementById('book-form');

form.onsubmit = function(e){
  e.preventDefault();

  var book_name   = this.book_name.value;
  var book_author = this.book_author.value;
  var method      = this.method;
  var url         = this.action;

  var client = window.XMLHttpRequest 
  ? new XMLHttpRequest() 
  : new ActiveXObject("Microsoft.XMLHTTP");

  client.open(method, url, false);

  client.onreadystatechange = function() {
    if (client.readyState == 4 && client.status == 201) {
      response = JSON.parse(client.responseText);

      output = '<div class = "book">'
        + '<span>' + response.book.name + '</span> - ' 
        + '<span>' + response.book.author + '</span>'
        + '</div>'

      document.getElementById('output').innerHTML = output;
    }

    if (client.readyState == 4 && client.status == 400) {
      response = JSON.parse(client.responseText);

      output = '<div class = "error">' + response.error.message + '</div>';

      document.getElementById('output').innerHTML = output;
    } 

  };

  client.setRequestHeader(
    "Content-Type", 
    "application/x-www-form-urlencoded"
    );

  client.send(serialize({ book_name: book_name,book_author:book_author}));
}

var serialize = function(object){
  var data = [];

  for (var i in object) {
    data.push(
      encodeURIComponent(i) 
      + "=" +
      encodeURIComponent(object[i])
      );
  }

  data = data.join("&");

  return data;
}

