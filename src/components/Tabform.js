import { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const Tabform = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "prajwal@gmail.com",
    age: 26,
    interest: ["coding", "javascript", "traveling"],
    theme: "dark",
  });

  const [error, setError] = useState({});

  const tabList = [
    {
      name: "Profile",
      component: Profile,
      validation: () => {
        let err = {};

        if (!data.name || data.name.length < 2) {
          err.name = "Name is Not Valid";
        }

        if (!data.email || data.email.length < 2) {
          err.email = "Name is Not Valid";
        }

        if (data.age < 18) {
          err.age = "Name is Not Valid";
        }

        setError(err);

        return err.name || err.email || err.age ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validation: () => {
        let err = {};
        if (data.interest.length < 1) {
          err.interest = "Atlesst one need be selected";
        }
        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validation: () => {
        return true;
      },
    },
  ];

  const Activecomponent = tabList[activeTab].component;

  const handleClick = (index) => {
    if (tabList[activeTab].validation()) {
      setActiveTab(index);
    }
  };

  const nextBtn = () => {
    if (tabList[activeTab].validation() && activeTab < tabList.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const prevBtn = () => {
    if (tabList[activeTab].validation() && activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div>
      <div className="list-wrapper">
        {tabList.map((list, index) => (
          <span className="list" key={index} onClick={() => handleClick(index)}>
            {list.name}
          </span>
        ))}
      </div>
      <div className="tab-body">
        <Activecomponent data={data} setData={setData} error={error} />
      </div>

      <div className="btn">
        {activeTab > 0 && <button onClick={prevBtn}>Prev</button>}
        {activeTab < tabList.length - 1 && (
          <button onClick={nextBtn}>Next</button>
        )}
        {activeTab === tabList.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
};

export default Tabform;
