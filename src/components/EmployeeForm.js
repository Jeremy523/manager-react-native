import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';
import { DAYS } from '../Constants';

class EmployeeForm extends Component {
    render() {
        const { name, phone, shift } = this.props;

        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={name}
                        onChangeText={
                            value => this.props.employeeUpdate({ prop: 'name', value })
                        }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={phone}
                        onChangeText={
                            value => this.props.employeeUpdate({ prop: 'phone', value })
                        }
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={
                            value => this.props.employeeUpdate({ prop: 'shift', value })
                        }
                    >
                        <Picker.Item label={DAYS[0]} value={DAYS[0]} />
                        <Picker.Item label={DAYS[1]} value={DAYS[1]} />
                        <Picker.Item label={DAYS[2]} value={DAYS[2]} />
                        <Picker.Item label={DAYS[3]} value={DAYS[3]} />
                        <Picker.Item label={DAYS[4]} value={DAYS[4]} />
                        <Picker.Item label={DAYS[5]} value={DAYS[5]} />
                        <Picker.Item label={DAYS[6]} value={DAYS[6]} />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10,
        color: 'black'
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
