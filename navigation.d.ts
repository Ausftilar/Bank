import { TypeRootStackParamList } from './App/navigation/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TypeRootStackParamList {}
  }
}