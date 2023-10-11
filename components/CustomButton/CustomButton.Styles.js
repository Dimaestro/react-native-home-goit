import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 43,
    ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00",
      },
    }),
  },
  btnLandscape: {
    marginTop: 15,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-regular",
  },
});

export default styles;
