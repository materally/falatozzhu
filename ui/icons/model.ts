import { IconProps } from "react-native-vector-icons/Icon";

type IconPropsWithoutName = Omit<IconProps, "name">;

export interface UIIconProps extends IconPropsWithoutName {
  name?: string;
}
