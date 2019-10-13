import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { PropType } from 'prop-types';
import styles from './styles';

const Header = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.wrapper}>
            <Image resizeMode='contain' style={styles.icon} source={require('./images/gear.png')} />
        </TouchableOpacity>
    </View>
);

// Header.propTypes = {
//     onPress: PropType.func,
// };
export default Header;