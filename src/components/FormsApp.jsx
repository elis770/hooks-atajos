import { useForms } from '../hooks/useForms';

export const FormsApp = () => {
  const inicialForm = {
    username: '',
    email: '',   
    password: '',
  };

  const { formState, onInputChange } = useForms(inicialForm);
  
  const { username = '', email = '', password = '' } = formState || {};

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validación básica
  /*if (!username.trim() || !email.trim() || !password.trim()) {
    console.error('Todos los campos son obligatorios');
    return;
  }*/    
 console.log(formState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
