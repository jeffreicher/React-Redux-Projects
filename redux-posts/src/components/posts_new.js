import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        const { meta: {touched, error} } = field;
        const className=`form-control ${touched && error ? 'border border-danger' : ''}`;
        
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className={className} type="text" {...field.input} />
                <div className="text-danger">{touched ? error : ''}</div>
            </div>
        );
    };

    onSubmit(values) {
        console.log(values)
    };

    render() {
        const { handleSubmit } =this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" component={this.renderField} label="Title" />
                <Field name="categories" component={this.renderField} label="Categories" />
                <Field name="content" component={this.renderField} label="Post Content" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    };
};

function validate(values) {
    const errors = {};

    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is longer than 3 characters!";
    }
    if (!values.categories) {
        errors.categories = "Enter a category!";
    }
    if (!values.content) {
        errors.content = "Enter some content!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);