const Profile = ({ data, setData, error }) => {
  const { name, email, age } = data;

  const handleChange = (e, item) => {
    setData((prevState) => ({ ...prevState, [item]: e.target.value }));
  };
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {error.name && <span>{error.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {error.email && <span>{error.email}</span>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "number")}
        />
        {error.age && <span>{error.age}</span>}
      </div>
    </div>
  );
};

export default Profile;
