function SkeletonLoading() {
  return (
    <li className="me-0 ms-0 w-[12rem] list-none">
      <figure className="flex flex-col items-start justify-center rounded-xl bg-[#33334d] p-4 shadow-md">
        <div className="relative w-full">
          <span className="skeleton skeleton-icon absolute right-2 top-2  rounded-sm bg-[#01d676] px-1 py-0 text-center font-semibold text-white"></span>
          <img className="skeleton mb-1 h-60 w-full rounded-sm" />
        </div>
        <p
          className={"skeleton skeleton-text text-sm font-bold text-white"}
        ></p>
        <p className="skeleton skeleton-icon flex  gap-1 text-white">
          <span className="text-sm"></span>
        </p>
        <div className="flex w-full items-center justify-between gap-3 text-sm  text-white">
          <p className="skeleton skeleton-date font-light"></p>
          <button className="skeleton skeleton-button  0 rounded-md bg-[#33334d] px-2 py-0 font-light"></button>
        </div>
      </figure>
    </li>
  );
}

export default SkeletonLoading;
