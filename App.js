
import RootNavigation from './routes/RootNavigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <RootNavigation/>
        </ApplicationProvider>
  );
}
