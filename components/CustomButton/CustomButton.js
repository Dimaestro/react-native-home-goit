import styles from "./CustomButton.Styles";
import {Text, TouchableOpacity} from "react-native";

const CustomButton = ({onSubmit, orientation, title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={
        orientation === "portrait" ?
          styles.btn : {...styles.btn, ...styles.btnLandscape}
      }
      onPress={onSubmit}
    >
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
