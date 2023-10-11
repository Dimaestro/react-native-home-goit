import styles from "./FormFooter.Styles";
import {Text, TouchableOpacity, View} from "react-native";

const FormFooter = ({text, btnTitle, navigation, route}) => {
  const changeNavigation = () => {
    if(route.name === "Login") {
      navigation.navigate("Register")
    }
    if(route.name === "Register") {
      navigation.navigate("Login")
    }
  }

  return (
    <View style={styles.descriptionWrapper}>
      <Text style={styles.descriptionTitle}>{text}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnLink}
        onPress={changeNavigation}
      >
        <Text style={styles.btnLinkTitle}>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormFooter;
