import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);

  const goToPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div>
      <button onClick={goToPreviousPage} disabled={currentPage <= 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={goToNextPage} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
