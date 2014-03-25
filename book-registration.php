<?php

if(!empty($_POST['book_name']) && !empty($_POST['book_author'])){
	$book_name 	 = $_POST['book_name'];
	$book_author = $_POST['book_author'];

	header('Content-type: application/json',TRUE,201);

	print json_encode(array(
		'book' => array(
		  'name'   => $book_name,
		  'author' => $book_author,
		)
	));

}else{

	header('Content-type: application/json',TRUE,400);

	print json_encode(array(
		'error' => array(
		  'message' => 'Book Was Not Registered',
		)
	));
}