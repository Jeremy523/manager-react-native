import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;
        const uid = this.props.employee.uid;
        this.props.employeeSave({ name, phone, shift, uid });
    }

    onTextButtonPress() {
        const { phone, shift } = this.props;

        text(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button callback={this.onSaveButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button callback={this.onTextButtonPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave
})(EmployeeEdit);
