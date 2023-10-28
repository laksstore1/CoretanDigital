document.addEventListener('DOMcontentLoaded', function () {
  if (document.readyState === 'loading') {

    document.addEventListener('readystatechange', function () {
      if (document.readyState === 'interactive') {

        const submitForm = document.getElementById('form');
        submitForm.addEventListener('submit', function (event) {
          event.preventDefault();
          addTodo();
        });
      }
    });
  } else {
     const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function (event) {
      event.preventDefault();
      addTodo();
    });
  }
});


const buttonPlay = document.getElementById("button-play");
const buttonReset = document.getElementById("button-reset");


   document.addEventListener("click", function() {
  alert("Anda telah menambahkan buku ke daftar bacaan Anda.");
  saveData();
});


document.addEventListener("click", function() {
  alert("Anda telah menghapus buku ini dari daftar bacaan Anda.");
  deleteData();
}); 

   document.addEventListener("ondatasave", function () {
  console.log("data tersimpan");
});
   
   document.addEventListener("ondataloaded", function () {
  refreshDataFromBooks();
});

   function changeText() {
     const checkbox = document.getElementById("inputIsComplete");
     const textSubmit = document.getElementById("textSubmit");

     if (checkbox.checked == true) {
    textSubmit.innerText = "sudah dibaca";
  } else {
    textSubmit.innerText = "belum dibaca";
  }
}