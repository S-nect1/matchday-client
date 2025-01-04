import CommonIcon from './CommonIcon';

type AlarmProps = {
  onPress?: () => void;
  size?: number;
};

const AlarmButton = ({ onPress, size }: AlarmProps) => {
  return <CommonIcon iconKey="alarm" size={size} onPress={onPress} />;
};

export default AlarmButton;
