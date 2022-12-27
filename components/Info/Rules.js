import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

function Rules({children}) {

  return (
    <div className="flex justify-around gap-2 text-pallete-light-yellow">
      <ExclamationCircleIcon className="w-7" />
      <h2 className="text-xs md:text-sm opacity-90 text-white font-semibold w-10/12 text-justify">
        {children}
      </h2>
    </div>
  );
}

export default Rules;
