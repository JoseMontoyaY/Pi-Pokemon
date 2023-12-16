import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, setCurrentPage } from "../../redux/actions/actions";

const Pagination = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const nextPageUrl = useSelector((state) => state.nextPageUrl);
  const previousPageUrl = useSelector((state) => state.previousPageUrl);

  const goToNextPage = () => {
    if (nextPageUrl) {
      dispatch(fetchPokemon(nextPageUrl));
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const goToPreviousPage = () => {
    if (previousPageUrl) {
      dispatch(fetchPokemon(previousPageUrl));
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div>
      <button onClick={goToPreviousPage} disabled={!previousPageUrl}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={goToNextPage} disabled={!nextPageUrl}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
