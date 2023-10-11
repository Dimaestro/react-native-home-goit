import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {useEffect, useState} from "react";
import styles from "./LoginScreen.Styles";
import FormHeaderTitle from "../../components/FormHeaderTitle";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import FormFooter from "../../components/FormFooter";

const LoginScreen = ({navigation, route}) => {
  const [formData, setFormData] = useState({email: '', password: ''});
  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(0)
  const [orientation, setOrientation] = useState(
    Dimensions.get("window").width > Dimensions.get("window").height ?
      "landscape" : "portrait"
  )

  useEffect(() => {
    const changeOrientation = () => {
      const orientation = Dimensions.get("window").width > Dimensions.get("window").height ?
        "landscape" : "portrait";
      setOrientation(orientation)
    }
    const listener = Dimensions.addEventListener("change", changeOrientation);
    return () => {
      listener.remove();
    };
  }, [])
  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(formData);
    setFormData({email: "", password: ""});
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../assets/bg-image/photo-bg.jpg")}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <View style={orientation === "portrait" ? styles.form : styles.formLandscape}>
            <FormHeaderTitle title={"Увійти"} route={route}/>
            <CustomInput
              type="email"
              placeholder={"Адреса електронної пошти"}
              formData={formData}
              setFormData={setFormData}
              setKeyboardVerticalOffset={setKeyboardVerticalOffset}
              orientation={orientation}
              route={route}
            />
            <CustomInput
              type="password"
              placeholder={"Пароль"}
              formData={formData}
              setFormData={setFormData}
              setKeyboardVerticalOffset={setKeyboardVerticalOffset}
              orientation={orientation}
              route={route}
            />
            <CustomButton
              onSubmit={onSubmit}
              orientation={orientation}
              title={"Увійти"}
            />
            <FormFooter
              text={"Немає акаунту?"}
              btnTitle={" Зареєструватися"}
              navigation={navigation}
              route={route}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen;
