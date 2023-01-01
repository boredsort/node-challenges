const DownArrow = () => {
  return (
    <div>
      <svg
        fill="yellow"
        height="30px"
        width="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.004 512.004"
      >
        <g>
          <g>
            <path
              d="M370.818,1.626c-7.915-3.328-17.131-1.429-23.253,4.651L256.002,98.16L164.439,6.276
			c-6.101-6.08-15.296-7.979-23.232-4.651c-7.979,3.285-13.205,11.093-13.205,19.712v362.667c0,5.675,2.261,11.115,6.272,15.104
			l107.051,106.667c3.989,4.011,9.408,6.229,15.061,6.229h0.043c5.653,0,11.072-2.261,15.061-6.272l106.283-106.667
			c4.011-3.989,6.229-9.408,6.229-15.061V21.338C384.002,12.719,378.796,4.911,370.818,1.626z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

const South = () => {
  return (
    <>
      <div className="flex flex-column flex-space-between street">
        <DownArrow />
        <DownArrow />
      </div>
    </>
  );
};

export { South as south };
