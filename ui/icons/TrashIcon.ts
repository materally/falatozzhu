import { createElement } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { UIIconProps } from "./model";

const ICON = 'trash';

export const TrashIcon = ({ name = ICON, ...props }: UIIconProps) => createElement(Ionicons, { name, ...props });