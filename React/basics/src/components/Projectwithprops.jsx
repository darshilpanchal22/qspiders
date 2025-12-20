import React from "react";
import { Bookmark } from "lucide-react";

const Projectwithprops = () => {
  return (
    <div className="parent">
      <div className="card">
        {/* Top section */}
        <div className="top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
            alt="Amazon logo"
          />

          <button>
            Save
            <Bookmark size={23} />
          </button>
        </div>
        {/* Center section */}
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>

          <h2>Senior UI/UX Designer</h2>

          <h4>Part-time Senior-level</h4>
        </div>
        {/* Bottom section */}
        <div className="bottom">
          <div>
            <h3>$120/hour</h3>
            <p>Ahmedabad - Gujarat</p>
          </div>

          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Projectwithprops;
