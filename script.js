function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please fill out all of the boxes below");
      return false;
    }
  }

  function ContactForm() {
    const [state, handleSubmit] = useForm("xzbooeyd");
    if (state.succeeded) {
        return <p>Thanks you!</p>;
    }
}