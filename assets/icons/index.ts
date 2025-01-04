import logoIcon from '../icons/mainlogo.svg';
import alarmIcon from '../icons/alarm.svg';

export const Icons = {
  logo: logoIcon,
  alarm: alarmIcon,
} as const;

export type IconKey = keyof typeof Icons;
