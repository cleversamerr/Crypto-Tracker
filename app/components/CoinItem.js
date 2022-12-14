import { Image, Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import withTouchableOpacity from "../hoc/withTouchableOpacity";
import PriceChange from "./PriceChange";
import Rank from "./Rank";
import colors from "../config/colors";

const wrapperOptions = {
  activeOpacity: 0.2,
  delayPressOut: 60,
};

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: coin.image }} style={styles.image} />

      <View>
        <Text style={styles.title}>{coin.name}</Text>

        <View style={styles.infoContainer}>
          <Rank rank={coin.market_cap_rank} />

          <Text style={[styles.text, styles.symbol]}>{coin.symbol}</Text>

          <PriceChange price={coin.price_change_percentage_24h} />
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.title}>${coin.current_price}</Text>

        <Text style={[styles.text, styles.marketCap]}>
          {coin.market_cap} USDT
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.3,
    flexDirection: "row",
    padding: 15,
  },
  rightContainer: {
    alignItems: "flex-end",
    marginLeft: "auto",
  },
  infoContainer: {
    flexDirection: "row",
  },
  image: {
    alignSelf: "center",
    height: 35,
    marginRight: 10,
    width: 35,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: colors.white,
    fontSize: 11,
    marginRight: 5,
  },
  marketCap: {
    color: colors.white,
    fontSize: 10,
    marginRight: 0,
  },
  symbol: {
    alignSelf: "center",
    fontSize: 11,
    textTransform: "uppercase",
  },
});

export default withTouchableOpacity(CoinItem, wrapperOptions);
