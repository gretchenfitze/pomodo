const BREAK_OVER_TEXT = 'Break is over! Get back to work now.';
const WORK_OVER_TEXT = 'Work time is over! Take a break.';
const audio = new Audio('https://notificationsounds.com/message-tones/office-2-453/download/mp3');

const notify = (timerType) => {
  const text = timerType === 'work' ? WORK_OVER_TEXT : BREAK_OVER_TEXT;

  if (!('Notification' in window)) {
    alert('This browser does not support system notifications');
  } else if (Notification.permission === 'granted') {
    audio.play();
    const notification = new Notification(text);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        audio.play();
        const notification = new Notification(text);
      }
    });
  }
};
export default notify;