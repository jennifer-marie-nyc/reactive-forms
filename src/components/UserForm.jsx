import { useState } from "react";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [users, setUsers] = useState([]);

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password, confirmPassword };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setHasBeenSubmitted(true);
    setUsers([...users, newUser]);
    console.log("Users are: ", users);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("First name must be at least 2 characters");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Last name must be at least 2 characters");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 8) {
      setEmailError("Email must be at least 8 characters");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setConfirmPasswordError("Confirm password does not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      <div className="card shadow px-4 py-4 mb-4">
        <div className="card-header bg-white mx-auto text-center">
          {hasBeenSubmitted ? (
            <h2>Thank you for submitting the form!</h2>
          ) : (
            <h2>Welcome, Please submit the form</h2>
          )}
        </div>
        <div className="card-body">
          <form onSubmit={createUser}>
            <div className="mb-4">
              <label className="form-label" htmlFor="firstName">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstName}
                className={
                  firstNameError
                    ? "form-control border border-danger border-3"
                    : "form-control"
                }
              />
              {firstNameError ? <p>{firstNameError}</p> : ""}
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="lastName">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastName}
                className={
                  lastNameError
                    ? "form-control border border-danger border-3"
                    : "form-control"
                }
              />
              {lastNameError ? <p>{lastNameError}</p> : ""}
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="email">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmail}
                className={
                  emailError
                    ? "form-control border border-danger border-3"
                    : "form-control"
                }
              />
              {emailError ? <p>{emailError}</p> : ""}
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePassword}
                className={
                  passwordError
                    ? "form-control border border-danger border-3"
                    : "form-control"
                }
              />
              {passwordError ? <p>{passwordError}</p> : ""}
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="confirm-password">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                className={
                  confirmPasswordError
                    ? "form-control border border-danger border-3"
                    : "form-control"
                }
              />
              {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Create User"
                className="btn btn-info mx-auto"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-header bg-white mx-auto text-center">
          <h2>Users</h2>
        </div>
        <div className="card-body">
          {users.map((user) => (
            <p key={user.id}>
              {user.firstName} {user.lastName} ({user.email})
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserForm;
