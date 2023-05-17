import { LogBox } from 'react-native';
import Navigation from './app/navigation/Navigation';
import { AuthProvider } from './app/providers/AuthProvider';
import { DataProvider } from './app/providers/DataProvider';
import { StoryContainer } from './app/components/screens/Home/components/Stories/components/StoryContainer';

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <StoryContainer />
        <Navigation />
      </DataProvider>
    </AuthProvider>
  );
}

// LogBox.ignoreAllLogs();