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
                <Field name="categories"  component={this.renderField} label="Categories" />
                <Field name="content"  component={this.renderField} label="Post Content" />
            </form>
        );
    };
};

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);