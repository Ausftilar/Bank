import { MaterialIcons } from '@expo/vector-icons';

export interface Services {
  iconName: keyof typeof MaterialIcons.glyphMap,
  title: string,
  percent: number,
}