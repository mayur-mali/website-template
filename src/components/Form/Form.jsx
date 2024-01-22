import React, { useEffect } from "react";
// import loadingIcon from "../../assets/loading-purple.svg";

const Form = ({ children, className, onSubmit }) => {
  const [errors, set_errors] = React.useState({});
  var errors_template = {};
  const [validate, set_validate] = React.useState(null);
  const [form_data, set_form_data] = React.useState({});
  const [loading, set_loading] = React.useState(false);

  if (loading) {
    return (
      <div className="w-full h-full flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        set_validate(true);

        var valid = true;
        for (var name in errors) {
          console.log({ name });
          console.log(errors[name]);
          if (errors[name].length > 0) {
            valid = false;
            break;
          }
        }
        if (!valid) return;
        set_loading(true);
        await onSubmit(form_data);
        set_validate(false);
        set_loading(false);
      }}
      className={className + " flex flex-col"}
    >
      {children.map((child, i) =>
        React.cloneElement(child, {
          key: i,
          add_error: (name, error) => {
            errors_template = { ...errors_template, ...errors };
            errors_template[name] = error;
            set_errors(errors_template);
            // console.log({errors})
            // console.log("error in "+name+" is "+error+"", { ...errors, [name]: error })
            // set_errors({ ...errors, [name]: error });
          },
          onChange: (name, value, e) => {
            //console.log({ ...form_data, [name]: value }, 'inside form component');
            set_form_data({ ...form_data, [name]: value });

            child.props.onChange && child.props.onChange(value, e);
          },
          validate: validate,
        })
      )}
    </form>
  );
};

export default Form;
