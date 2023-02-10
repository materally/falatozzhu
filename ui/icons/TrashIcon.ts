import { createElement } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { IconPropsWithoutName } from "./model";

const ICON = 'trash';

export const TrashIcon = (props: IconPropsWithoutName) => createElement(Ionicons, {...props, name: ICON});