// components/User.js
export default function User({ user }) {
    return (
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    );
  }
  