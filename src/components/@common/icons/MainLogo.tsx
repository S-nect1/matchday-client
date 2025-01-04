import CommonIcon from './CommonIcon';

type LogoProps = {
  onPress?: () => void;
  size?: number;
};

const MainLogo = ({ onPress, size }: LogoProps) => {
  return <CommonIcon iconKey="logo" size={size} onPress={onPress} />;
};

export default MainLogo;
