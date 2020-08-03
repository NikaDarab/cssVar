 const input = document.querySelectorAll('.controls input');

 function handleUpdate() {
     const suffix = this.dataset.sizing || '';
     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
 }

 input.forEach(input => input.addEventListener('change', handleUpdate));
 input.forEach(input => input.addEventListener('mousemove', handleUpdate));

function changeImage() {
    let newPhoto = document.getElementById("upload").value.split("\\")[2];
    document.getElementById("first").src = `./assets/${newPhoto}`;
    console.log(newPhoto);
}

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#first').attr('src', e.target.result);
      }
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#filePhoto").change(function() {
    readURL(this);
  });

  