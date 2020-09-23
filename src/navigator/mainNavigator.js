import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile106420Navigator from '../features/UserProfile106420/navigator';
import Tutorial106419Navigator from '../features/Tutorial106419/navigator';
import NotificationList106391Navigator from '../features/NotificationList106391/navigator';
import Settings106390Navigator from '../features/Settings106390/navigator';
import Settings106382Navigator from '../features/Settings106382/navigator';
import UserProfile106380Navigator from '../features/UserProfile106380/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile106420: { screen: UserProfile106420Navigator },
Tutorial106419: { screen: Tutorial106419Navigator },
NotificationList106391: { screen: NotificationList106391Navigator },
Settings106390: { screen: Settings106390Navigator },
Settings106382: { screen: Settings106382Navigator },
UserProfile106380: { screen: UserProfile106380Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
