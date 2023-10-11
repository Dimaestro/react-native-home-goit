import styles from "./CustomInput.Styles";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

const CustomInput = (props) => {
  const {
    setKeyboardVerticalOffset,
    type = "email",
    setFormData,
    placeholder,
    formData,
    orientation,
    route
  } = props
  const [isShownPassword, setIsShownPassword] = useState(true);
  const changeKeyboardVerticalOffset = () => {
    if (route.name === "Login") {
      orientation === "landscape" ?
        setKeyboardVerticalOffset(-116) : setKeyboardVerticalOffset(-230);
    }
    if (route.name === "Register") {
      orientation === "landscape" ?
        setKeyboardVerticalOffset(-116) : setKeyboardVerticalOffset(-170);
    }
  }
  const toggleShownPassword = () => {
    setIsShownPassword(!isShownPassword);
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        onChangeText={
          (value) => (
            setFormData((prevState) => ({...prevState, [type]: value}))
          )}
        value={formData[type]}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        onFocus={changeKeyboardVerticalOffset}
        secureTextEntry={isShownPassword && type === "password"}
      />
      {type === "password" && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnPass}
          onPress={toggleShownPassword}
        >
          <Text style={styles.btnPassTitle}>
            {isShownPassword ? "Показати" : "Cкрити"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default CustomInput;
