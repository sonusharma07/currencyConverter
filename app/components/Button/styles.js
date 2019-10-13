import EStyleSheets from 'react-native-extended-stylesheet';

const styles = EStyleSheets.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 19,
        marginRight: 11,
    },
    text: {
        color: '$white',
        fontSize: 16,
        fontWeight: '200',
        paddingVertical: 20,
    }

});

export default styles;
