import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { navigate } from "../services/navigationService";
import { TabBarContainer, TabButton, TabIcon, TabLabelText,iconStyling,screenStyling } from "./TabBar.style";
import {View} from 'react-native'
import {colors} from '../common/colors'

import FoundationIcon from 'react-native-vector-icons/Foundation';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IonIcon from 'react-native-vector-icons/Ionicons';




const renderIcon = (name:string,focused:boolean)=>{
  const NAV_ICONS: any = {
    HomeScreen: <FoundationIcon name="home" size={28}  color={focused?colors.main.primary:colors.main.gray} />,
    BuyScreen:  <EntypoIcon  name="shop"  size={28} color={focused?colors.main.primary:colors.main.gray} />,
    ScanScreen:(<View style={iconStyling.scanStyle}>
                  <MaterialCommunityIcon  color={colors.main.white} name="line-scan"  size={28}  />
                </View>),
    TransactionsScreen: <FontistoIcon name="credit-card"  size={20}  color={focused?colors.main.primary:colors.main.gray}  />,
    ProfileScreen: <IonIcon  name="person"  size={28} color={focused?colors.main.primary:colors.main.gray}   />,
  };
  return NAV_ICONS[name];
}

const TabName:any = {
  HomeScreen: "Home",
  BuyScreen: "Buy",
  ScanScreen: "",
  TransactionsScreen: "Transactions",
  ProfileScreen: "Profile"
}


const TabBar = (props: BottomTabBarProps) => {
  const { routes } = props.state;

  const handleTabPress = (stackName: string /* focused: boolean */) => () => {
    navigate(stackName);
  };
  

  return (
    <TabBarContainer style={screenStyling.tabbarStyle}>
      {routes.map((tab, index) => {
        const focused = index === props.state.index;
        const { name,params} = tab;
        return (
          <TabButton testID="TabButton"
            accessibilityLabel={`${name} tab button`} focused={focused} key={tab.key} onPress={handleTabPress(tab.name)}>
            {renderIcon(name,focused)}
            <TabLabelText focused={focused}>
              {TabName[name]}
            </TabLabelText>
          </TabButton>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
