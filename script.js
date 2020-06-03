let greetingMessageElement = document.getElementById('dynamic-greeting');
const msg = () => {
  const currentHour = new Date().getHours();
  if (currentHour > 18) return 'Good evening!';
  if (currentHour >= 12) return 'Good afternoon!';
  return 'Good morning!'
}
greetingMessageElement.innerHTML = `<h3><b>${msg()}</b></h3>`;
