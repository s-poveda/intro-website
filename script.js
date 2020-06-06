let greetingMessageElement = document.getElementById('dynamic-greeting');
const msg = () => {
  const currentHour = new Date().getHours();
  if (currentHour > 18) return 'Good Evening!';
  if (currentHour >= 12) return 'Good Afternoon!';
  return 'Good Morning!'
}
greetingMessageElement.innerHTML = `${msg()}`;
