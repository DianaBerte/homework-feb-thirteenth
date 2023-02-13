export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const getJobsActionAsync = (baseEndPoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        baseEndPoint + query + "&limit=20"
        // "https://strive-benchmark.herokuapp.com/api/jobs?search="
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
