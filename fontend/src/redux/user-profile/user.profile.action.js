const {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  END_SESSION,
} = require('./user-profile.type');

const fetchUserProfileRequest = () => {
  return {
    type: FETCH_USER_PROFILE_REQUEST,
  };
};

const fetchUserProfileSuccess = (profile) => {
  return {
    type: FETCH_USER_PROFILE_SUCCESS,
    payload: profile,
  };
};

const fetchUserProfileFailure = (error) => {
  return {
    type: FETCH_USER_PROFILE_FAILURE,
    payload: error,
  };
};

const endSession = () => {
  return {
    type: END_SESSION,
  };
};

export { fetchUserProfileRequest, fetchUserProfileSuccess, fetchUserProfileFailure, endSession };
