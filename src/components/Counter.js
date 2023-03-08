import React, { Component } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

export default class Counter extends Component {
    state = {
        count: 0,
        step: 2,
    };
    incrementar() {
        if (this.state.count < this.props.max || this.props.max === undefined) {
            this.setState({ count: this.state.count + 1 + this.state.step});
        }
    }
    decrementar() {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 - this.state.step });
        }
    }
    alteraStep(e) {
        this.setState({ step: parseInt(e.nativeEvent.text) });
    }
    alteraStep2(text) {
        this.setState({ step: parseInt(text) });
    }

    render() {
        return (
            <View style={styles.contador}>
                <TextInput style={styles.forget}
                    value={this.state.step.toString()}
                    onChange={(e) => this.alteraStep(e)}
                    inputMode='numeric'
                    keyboardType="numeric"
                />
                <TextInput style={styles.forget2}
                    defaultValue={this.state.step}
                    onChange={(text) => this.alteraStep2(text)}
                    inputMode='numeric'
                    keyboardType="numeric"
                />
                <Text>Contador: {this.state.count} </Text>
                <Button onPress={() => this.incrementar()} title="+" />
                <Button onPress={() => this.decrementar()} title="-" />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forget: {
        backgroundColor: 'grey',
        width:'20%',
        opacity: '0.8'
    },
    forget2: {
        backgroundColor: 'grey',
        width:'20%',
        opacity: '0.5'
    },
});
