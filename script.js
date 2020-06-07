let greetingMessageElement = document.getElementById('dynamic-greeting');

//Msg checks the current time (0 - 24) and return a greeting message
const msg = () => {
  const currentHour = new Date().getHours();
  if (currentHour > 18) return 'Good Evening,';
  if (currentHour >= 12) return 'Good Afternoon,';
  return 'Good Morning,'
}
greetingMessageElement.innerHTML = `${msg()} I'm Sam!`;
