function validateForm() {
  const alphaRegex = /^[A-Za-z]+$/;
  const matriculationRegex = /^[0-9]+$/;

  const firstName = document.getElementById("firstName").value;
  const middleInitial = document.getElementById("middleInitial").value;
  const lastName = document.getElementById("lastName").value;
  const matriculation = document.getElementById("matriculation").value;

  if (!alphaRegex.test(firstName)) {
    alert("First name must contain only letters.");
    return false;
  }

  if (middleInitial && !alphaRegex.test(middleInitial)) {
    alert("Middle initial must contain only one letter.");
    return false;
  }

  if (!alphaRegex.test(lastName)) {
    alert("Last name must contain only letters.");
    return false;
  }

  if (!matriculationRegex.test(matriculation)) {
    alert("Matriculation number must contain only digits.");
    return false;
  }

  return true;
}
