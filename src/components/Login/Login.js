import React, { useState } from 'react';
import './login.css';
import unitol from '../../assets/images/Unitol_logo.jpeg';

const Login = ({ setIsLoggedIn }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone === '9051737375' && password === '123456') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid phone number or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-image">
      <div className="card p-4 shadow transparent-card" style={{ width: '350px' }}>
        <h4 className="mb-3 text-center text-white">Login</h4>
        <div className="text-center mb-3">
          <img src={unitol} alt="Logo" className="logo" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control transparent-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control transparent-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-danger mb-2">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


//old code
// import React, { useState } from 'react';

// const Login = ({ setIsLoggedIn }) => {
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (phone === '9051737375' && password === '123456') {
//       setIsLoggedIn(true);
//       setError('');
//     } else {
//       setError('Invalid phone number or password');
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow" style={{ width: '350px' }}>
//         <h4 className="mb-3 text-center">Login</h4>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label">Phone Number</label>
//             <input
//               type="text"
//               className="form-control"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <div className="text-danger mb-2">{error}</div>}
//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
