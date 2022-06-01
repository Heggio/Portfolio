function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please fill out all of the boxes below");
      return false;
    }
  }

  function contactForm() {
    const [state, handleSubmit] = useForm("xzbooeyd");
    if (state.succeeded) {
        return <p>Thanks you!</p>;
    }
}