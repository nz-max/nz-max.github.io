import {
  unhideImageForm,
  addImage,
  addImageForm,
  getImageDisplay,
  deleteImage,
  prevImage,
  nextImage,
  addComment,
  getMessageSection,
  addCommentForm,
  deleteImageButton,

} from "./api.mjs";

getImageDisplay();
getMessageSection();

addCommentForm();
addImageForm();

//---------
addImage("Good Title", "Alice", "media/1.jpg");
//addImage('Title', 'Bob', 'media/2.jpg');

addComment(1, "Bob", "This is my truck");
// addComment(1, 'Bob', 'Another comment');

//deleteImage(1);

//-----------

unhideImageForm();

deleteImageButton();

nextImage();
prevImage();
