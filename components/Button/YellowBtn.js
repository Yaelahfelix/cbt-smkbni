import React from "react";

function YellowBtn({ addClass,children, onClick }) {
  return (
    <button onClick={onClick} className={`${addClass} bg-pallete-yellow hover:bg-pallete-red transition-colors font-semibold py-2 px-7 tracking-wide rounded-md`}>
      {children}
    </button>
  );
}

export default YellowBtn;
