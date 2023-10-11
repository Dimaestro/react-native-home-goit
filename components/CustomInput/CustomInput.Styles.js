import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  inputWrapper : {
    marginTop: 16,
  },
  inputWrapperLandscape : {
    marginTop: 8,
  },
  input: {
    position: "relative",
    color: '#212121',
    fontFamily: "Roboto-regular",
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    padding: 16,
    height: 50,
    fontSize: 16,
    fontWeight: '400',
  },
  inputLandscape: {
    position: "relative",
    color: '#212121',
    fontFamily: "Roboto-regular",
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    padding: 16,
    height: 50,
    fontSize: 16,
    fontWeight: '400',
  },
  btnPass: {
    position: "absolute",
    right: 16,
    top: 16,
    textAlign: "center"
  },
  btnPassTitle: {
    color: "#1B4371",
    fontFamily: "Roboto-regular",
  },
});

export default styles;
