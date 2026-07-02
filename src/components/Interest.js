const Interest = ({ data, setData, error }) => {
  const { interest } = data;

  const handleChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>Coding</label>
        <input
          type="checkbox"
          name="coding"
          checked={interest.includes("coding")}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Javascript</label>
        <input
          type="checkbox"
          name="javascript"
          checked={interest.includes("javascript")}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Traveling</label>
        <input
          type="checkbox"
          name="traveling"
          checked={interest.includes("traveling")}
          onChange={handleChange}
        />
      </div>
      {error.interest && <span>{error.interest}</span>}
    </div>
  );
};

export default Interest;
