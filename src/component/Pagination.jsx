import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthProvider";

export const Pagination = () => {
  const { currentPage, setCurrentPage } = useAuth();

  const { totalPages } = useSelector((state) => state.movies);
  return (
    <>
      {totalPages > 1 && (
        <div className="bg-[#181818] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
                className=" text-white px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                First
              </button>

              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="text-white px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Previous
              </button>

              {/* Page numbers */}

              {(() => {
                const buttons = [];
                for (let page = 1; page <= totalPages; page++) {
                  buttons.push(
                    <button
                      type="button"
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={` text-white px-3 py-1 border rounded text-sm cursor-pointer ${
                        currentPage === page
                          ? "bg-red-500 text-white border-red-500"
                          : "border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  );
                }
                return buttons;
              })()}

              {/*  */}
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className=" text-white px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Next
              </button>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(totalPages)}
                className="text-white px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Last
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
