import React, {useState} from "react";



const Message = () =>{
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();

    // Validate form fields
    if (!name || !email || !password || !confirmPassword) {
      setMessage('Please fill in all fields.');
      setMessageColor('red');
    } else if (password !== confirmPassword) {
      setMessage('Password and confirm password do not match.');
      setMessageColor('red');
    } else {
      // Perform signup logic here (e.g., make an API call to register the user)
      // Assuming signup is successful, display success message
      setMessage('Sign up successful!');
      setMessageColor('green');

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={name}
        className="input"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        className="input"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Create Account</button>
      {message && <p style={{ color: messageColor }}>{message}</p>}
    </form>
  )
}

export default Message;