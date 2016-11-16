/* eslint-disable */
import notification from './notification.mp3';

const BREAK_OVER_TEXT = 'Break is over! Get back to work now.';
const WORK_OVER_TEXT = 'Work time is over! Take a break.';
const audio = new Audio(notification);

const notify = (timerType) => {
  const text = timerType === 'work' ? WORK_OVER_TEXT : BREAK_OVER_TEXT;

  if (!('Notification' in window)) {
    console.log('This browser does not support system notifications');
  } else if (Notification.permission === 'granted') {
    audio.play();
    const newNotification = new Notification(text);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        audio.play();
        const newNotification = new Notification(text);
      }
    });
  }
};
export default notify;
