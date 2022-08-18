import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import NavigationContext from "../navigation/context";
import Screen from "../components/Screen";
import withStatusBarPadding from "../hoc/withStatusBarPadding";
import CoinItem from "../components/home/CoinItem";

import mapper from "../services/mapper";
import colors from "../config/colors";

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {};

  return (
    <NavigationContext.Provider value={navigation}>
      <Screen style={styles.container}>
        <StatusBar style="light" />

        <FlatList
          data={mapper.mapCoinsToHomeScreenView()}
          keyExtractor={(item) => item.id}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          renderItem={({ item }) => <CoinItem coin={item} />}
        />
      </Screen>
    </NavigationContext.Provider>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.lightBlack,
  },
  container: {
    backgroundColor: colors.lightBlack,
    flex: 1,
  },
});

export default withStatusBarPadding(HomeScreen, styles.statusBar);
