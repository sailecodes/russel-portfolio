import "./../../../css/Projects/Roles.css";
import "./../../../css/utilities.css";

const Roles = ({ contributions, onMouseOverHandler, onMouseLeaveHandler }) => {
  const onBtnClickHandler = (e) => {
    const textContainer = e.target.closest(".Projects--text-container");

    if (textContainer) {
      const introContainer = textContainer.querySelector(".Projects--intro-container");
      const rolesContainer = textContainer.querySelector(".Projects--roles-container");

      introContainer.style.transform = "translateY(0%)";
      rolesContainer.style.transform = "translateY(0%)";
    }
  };

  return (
    <div className="Projects--roles-container">
      <div>
        <button
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
          onClick={onBtnClickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
        <p>Go back</p>
        <div className="utility--underline Projects--underline-roles"></div>
      </div>
      <div>
        <p>Contributions</p>
        <ul>
          {contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Roles;
