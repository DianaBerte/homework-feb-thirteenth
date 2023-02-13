export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
// export const GET_BOOKS = "GET_BOOKS";

//action creator, a function returning an action (or a function)

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
});

export const getBooksAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
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

// export const getJobsActionAsync = (baseEndPoint, query) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(
//         baseEndPoint + query + "&limit=20"

//       );
//       if (response.ok) {
//         const { data } = await response.json();
//         dispatch({
//           type: GET_JOBS,
//           payload: data,
//         });
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
