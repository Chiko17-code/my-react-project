import React from 'react';
cd employee-form

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with empty values for the form fields
    this.state = {
      name: '',
      email: '',
      title: '',
      department: '',
    };
  }

  // Handle input field changes to update state
  handleInputChange = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  // Handle form submission, prevent page refresh, log state, and reset form
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state); // Log the form data to the console
    this.setState({ name: '', email: '', title: '', department: '' }); // Reset form fields
  };

  // Render the form with input fields for name, email, job title, and department
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange('name')}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange('email')}
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange('title')}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            value={this.state.department}
            onChange={this.handleInputChange('department')}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;



