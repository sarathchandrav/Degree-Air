import React from 'react';
import { Field, reduxForm } from 'redux-form';

class AirQualSearch extends React.Component {
    renderInput(searchProps) {
        console.log(searchProps)
        return (<input {...searchProps.input} />);
    }

    onSubmit(searchValues) {
        console.log(searchValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="city" component={this.renderInput} />
                <button>Search</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'airQualSearch'
})(AirQualSearch);