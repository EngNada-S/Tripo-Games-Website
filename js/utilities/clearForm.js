export function clearForm(fields) {
  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}
