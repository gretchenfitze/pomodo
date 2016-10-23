const notify = (timerType) => {
  const audio = new Audio('https://notificationsounds.com/message-tones/office-2-453/download/mp3');

  const text = timerType === 'Work' ?
    'Work time is over! Take a break.' :
    'Break ended! Get back to work now.';

  if (!('Notification' in window)) {
    alert('This browser does not support system notifications');
  } else if (Notification.permission === 'granted') {
    const notification = new Notification(text);
    audio.play();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notification = new Notification(text);
        audio.play();
      }
    });
  }
};
export default notify;
