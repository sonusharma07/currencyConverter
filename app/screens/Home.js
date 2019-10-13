import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'EGP';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '70';
const TEMP_CONVERSION_RATE = 0.789;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

    handlePressBaseCurrency = function () {
        console.log('Press Base');
    };

    handlePressQuoteCurrency = function () {
        console.log('Press quote');
    };

    handleTextChange = (text) => {
        console.log('change text', text);
    }

    handleSwapCurrency = () => {
        console.log('press swap currency');
    }

    handleOptionsPress = () => {
        console.log('handle option press');
    }
    render() {
        return (
            <Container>
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior='padding'>
                    <Logo />
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType='numeric'
                        onChangeText={this.onChangeText} />
                    <InputWithButton
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        value={TEMP_QUOTE_PRICE} />
                    <LastConverted
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        date={TEMP_CONVERSION_DATE}
                        conversionRate={TEMP_CONVERSION_RATE}
                    />
                    <ClearButton
                        text="Reverse Currencies"
                        onPress={this.handleSwapCurrency} />

                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default Home;