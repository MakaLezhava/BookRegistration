<html>
  <head>
    <meta charset="utf-8">
    <title>Books</title>
  </head>
  <body>
    <form id="book-form" method="post" action="book-registration.php">
      <fieldset>
        <legend>Register Book</legend>
        <div>
          <label>
            Book name:
            <input type="text" name="book_name">
          </label>
        </div> 
        <div>
          <label>
          Book author:
            <input type="text" name="book_author">
          </label>
        </div> 
        <div>
          <button type="submit" name="register">Register</button>
        </div>
      </fieldset>
    </form>
    <div id="output"></div>
    <script src="script.js"></script>
  </body>
</html>