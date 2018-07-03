import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
            <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
            </div>
        )
    }

    render() {
        return (
            <form action="">
                <Field name="title"  component={this.renderField} label="Title" />
                <Field name="tags"  component={this.renderField} label="Tags" />
            </form>
        );
    };
};

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);