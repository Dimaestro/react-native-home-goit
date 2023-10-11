import {Text, TouchableOpacity, View} from "react-native";
import styles from "./FormAvatar.Styles";

const FormAvatar = () => {
  return (
    <View style={styles.avatarWrapper}>
      <View style={styles.avtar}></View>
      <TouchableOpacity style={styles.btnAddAvatar}>
        <View style={styles.horizontalLine} />
        <View style={styles.verticalLine} />
      </TouchableOpacity>
    </View>
  )
}

export default FormAvatar;
