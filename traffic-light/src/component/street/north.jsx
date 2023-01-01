const UpArrow = () => {
  return (
    <div>
      <svg
        fill="yellow"
        stroke="yellow"
        strokeWidth="3"
        height="30px"
        width="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.018 512.018"
      >
        <g>
          <g>
            <path
              d="M377.737,112.896L270.686,6.229C266.697,2.219,261.278,0,255.625,0h-0.043c-5.632,0-11.072,2.261-15.061,6.272
                L134.238,112.939c-4.011,3.989-6.229,9.408-6.229,15.061v362.667c0,8.619,5.205,16.427,13.184,19.712
                c7.915,3.349,17.152,1.451,23.253-4.651l91.563-91.883l91.563,91.883c4.075,4.075,9.536,6.272,15.104,6.272
                c2.752,0,5.525-0.512,8.149-1.621c7.979-3.285,13.184-11.093,13.184-19.712V128C384.009,122.325,381.769,116.885,377.737,112.896z
                "
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

const North = () => {
  return (
    <>
      <div className="flex flex-column flex-space-between street">
        <UpArrow />
        <UpArrow />

      </div>
    </>
  );
};

export { North as north };
