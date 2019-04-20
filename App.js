import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeComponent } from './components/screens/home-component';
import { ShareWhoComponent } from './components/screens/share-who-component';
import { RegisterComponent } from './components/screens/register-component';
import { ShareComponent } from './components/screens/share-component';
import { WaitingConnection } from './components/screens/waiting-connection.component';

const AppNavigator = createStackNavigator({
  Home: HomeComponent,
  ShareWho: ShareWhoComponent,
  Share: ShareComponent,
  Look: RegisterComponent,
  WaitingConnection: WaitingConnection
},
  {
    initialRouteName: 'Home'
  }  
);

export default App = createAppContainer(AppNavigator);