import styles from "./FormHeaderTitle.Styles";
import {Text, View} from "react-native";

const FormHeaderTitle = ({title, route}) => {
  return (
    <View style={route.name === "Login" ? styles.titleHeaderWrapper : styles.titleHeaderWrapper__REGISTER}>
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  )
}

export default FormHeaderTitle;
