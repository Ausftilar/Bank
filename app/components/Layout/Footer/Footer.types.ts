import { AntDesign } from '@expo/vector-icons';

import { TypeRootStackParamList } from '../../../../app/navigation/types';

export interface FooterItemProps {
  iconName: keyof typeof AntDesign.glyphMap,
  title: keyof TypeRootStackParamList,
}

