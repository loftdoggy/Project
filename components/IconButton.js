import { images } from '../images';
import {StyleSheet, TouchableOpacity, Image} from 'react-native'

const IconButton = ({ type, onPressOut, id }) => {
  const _onPressOut = () => {
    onPressOut(id);
  };
  return (
    <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut}>
      <Image source={type} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
});