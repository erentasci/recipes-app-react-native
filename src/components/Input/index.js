import React from "react";
import { TextInput, Image, View, Pressable } from "react-native";
import styles from "./styles";

const Input = ({
  placeholder,
  showSearchIcon,
  style,
  pressable,
  onPress,
  ...props
}) => {
  const renderInput = () => {
    return (
      <View style={(styles.container, style)}>
        {showSearchIcon ? (
          <Image
            style={styles.icon}
            source={require("../../../assets/searchIcon.png")}
          />
        ) : null}
        <TextInput
            {...props}
          editable={!pressable}
          placeholderTextColor={styles.text}
          style={styles.input}
          placeholder={placeholder}
        />
      </View>
    );
  };

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }

  return renderInput();
};

Input.defaultProps = {
  placeholder: "Search recipe",
  showSearchIcon: true,
};

export default React.memo(Input);
