const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.value }));
  };

  return (
    <div>
      <div>
        <label>Dark</label>
        <input
          type="radio"
          name="drak"
          value="dark"
          checked={theme === "dark"}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Light</label>
        <input
          type="radio"
          name="light"
          value="light"
          checked={theme === "light"}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Settings;
