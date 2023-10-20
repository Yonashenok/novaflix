import SkeletonLoading from "../../ui/Loadding/SkeletonLoading";

function Loading() {
  return (
    <div className="me-0 ms-0 mt-24 grid grid-cols-1 items-center justify-center  gap-x-10 gap-y-2 py-8 pe-0 sm:grid-cols-3 sm:gap-x-2 md:grid-cols-4 md:gap-x-2 lg:grid-cols-5 lg:gap-x-2 xl:grid-cols-6 xl:gap-x-2 ">
      {Array.from({ length: 12 }, (_, i) => (
        <SkeletonLoading key={`skeleton-${i}`} />
      ))}
    </div>
  );
}

export default Loading;
