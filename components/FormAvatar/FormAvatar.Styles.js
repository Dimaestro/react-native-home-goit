import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  avatarWrapper: {
    width: 132,
    height: 120,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [
      { translateX: -66 },
    ],
  },
  avtar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  btnAddAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    right: 0,
    bottom: 12.5,
    borderWidth: 1,
    borderColor: "#FF6C00",
    width: 25,
    height: 25,
    borderRadius: "50%",
  },
  horizontalLine: {
    width: 13,
    height: 1,
    backgroundColor: "#FF6C00",
    marginLeft: -6.5,

  },
  verticalLine: {
    width: 1,
    height: 13,
    backgroundColor: "#FF6C00",
    marginLeft: -6.5,
  },
})

export default styles
