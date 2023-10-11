import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  container: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
  },
  form: {
    backgroundColor: "transparent",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 78,
  },
  formLandscape: {
    backgroundColor: "transparent",
    marginLeft: 48,
    marginRight: 48,
    marginBottom: 20
  },
});

export default styles;
