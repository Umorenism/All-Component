import axios from "axios";

// Base configuration for all API requests
const apiClient = axios.create({
  baseURL: "https://starfaceapi.site/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor for adding the token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Request OTP endpoint
export const requestOTP = async (email, referralCode) => {
  const payload = { email };
  if (referralCode) {
    payload.referralCode = referralCode;
  }
  const response = await apiClient.post("/auths/request-otp", payload);
  return response.data;
};

// Resend OTP endpoint
export const resendOTP = async (userId, email) => {
  const response = await apiClient.post("/auths/resendotp", { userId, email });
  return response.data;
};

// Verify OTP endpoint
export const verifyOTP = async ({ userId, otp }) => {
  const response = await apiClient.post("/auths/verify-otp", { userId, otp });
  return response.data;
};

// Set user password endpoint
export const setUserPassword = async (email, password) => {
  const response = await apiClient.post("/auths/set-password", {
    email,
    password,
  });
  return response.data;
};

// Login endpoint
export const login = async (email, password) => {
  const response = await apiClient.post("/auths/signin", { email, password });

  console.log("Response data:", response.data);
  return response.data;
};

// Fetch user profile
export const fetchUserProfile = async () => {
  const response = await apiClient.get("/user/profile");
  return response.data;
};

// Transfer funds
export const transferFunds = async ({ fromWallet, toWallet, amount }) => {
  const response = await apiClient.post("/wallets/transfer", {
    fromWallet,
    toWallet,
    amount,
  });
  return response.data;
};

// Redeem stars
export const redeemStar = async () => {
  try {
    const response = await apiClient.get("/transaction/redeem-stars");
    return response.data;
  } catch (error) {
    console.error(
      "Error redeeming stars:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get balance
export const getBalance = async () => {
  try {
    const response = await apiClient.get("/earn/wallet");
    return response.data;
  } catch (error) {
    console.error(
      "Error getting balance:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get balance
export const getUSDTBalance = async () => {
  try {
    const response = await apiClient.get("/wallet/get-wallet");
    return response.data;
  } catch (error) {
    console.error(
      "Error getting balance:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get other wallet
export const getOtherWallet = async () => {
  try {
    const response = await apiClient.get("/earn/wallet");
    return response.data;
  } catch (error) {
    console.error(
      "Error getting balance:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get transaction histories
export const getTransactionHistories = async () => {
  try {
    const response = await apiClient.get("/transaction/history");
    return response.data;
  } catch (error) {
    console.error(
      "Error transaction histories:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Deposit
export const getDepositAddress = async (asset) => {
  try {
    const payload = { asset };
    const response = await apiClient.post("/transaction/deposit", payload);
    return response.data;
  } catch (error) {
    console.error(
      "Error in getDepositAddress:",
      error.response || error.message
    );
    throw error;
  }
};

// Update user profile
// export const updateUserProfile = async ({
//   profilePicture,
//   bio,
//   interests,
//   dateOfBirth,
// }) => {
//   try {
//     const formData = new FormData();

//     if (profilePicture) formData.append("profilePicture", profilePicture);
//     if (bio) formData.append("bio", bio);
//     if (dateOfBirth) formData.append("dateOfBirth", dateOfBirth);

//     if (interests && interests.length > 0) {
//       interests.forEach((interest) => formData.append("interests[]", interest));
//     }

//     const response = await apiClient.put("/user/profile-update", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error updating user profile:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// };

// Upload image
export const uploadImage = async ({ images, description }) => {
  try {
    const formData = new FormData();
    images.forEach((file) => formData.append("images", file));
    if (description) formData.append("description", description);

    const response = await apiClient.post("/images/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error uploading images:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Withdrawal
export const makeWithdrawal = async (recipientAddress, asset, amount) => {
  try {
    const payload = { recipientAddress, asset, amount };
    const response = await apiClient.post("/trans/withdraw", payload);
    return response.data;
  } catch (error) {
    console.error(
      "Error in making withdrawals:",
      error.response || error.message
    );
    throw error;
  }
};

// Convert
export const Convert = async (amount) => {
  try {
    const payload = { amount };
    const response = await apiClient.post("/transaction/convert", payload);
    return response.data;
  } catch (error) {
    console.error(
      "Error in converting balance:",
      error.response || error.message
    );
    throw error;
  }
};

export const performTask = async (payload) => {
  try {
    const response = await apiClient.post("/marketPlace/perform-task", payload);
    return response.data;
  } catch (error) {
    console.error(
      "Error performing task",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getPerformedTasks = async () => {
  try {
    const response = await apiClient.get("/marketPlace/get-tasks");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching performed tasks",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const SubmitProof = async (taskId, file) => {
  try {
    const formData = new FormData();
    formData.append("taskId", taskId);
    formData.append("proof", file);
    const response = await apiClient.post(
      "/marketPlace/upload-proof",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting proof",
      error.response?.data || error.message
    );
    throw error;
  }
};

// API method: GetPendingTasks
export const GetPendingTasks = async (page) => {
  try {
    const response = await apiClient.get(
      `/marketPlace/get-taskproofs?page=${page}&limit=10`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Tasks", error.response?.data || error.message);
    throw error;
  }
};

export const reviewTaskProof = async (taskProofId, status) => {
  try {
    const response = await apiClient.post("/marketPlace/tasks/review", {
      taskProofId,
      status,
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error reviewing task proof (status: ${status}):`,
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchAdsCategories = async () => {
  try {
    const response = await apiClient.get("/marketPlace/ads-pricing");
    return response.data;
  } catch (error) {
    console.error(
      "Error getting Ads categories",
      error.response?.data || error.message
    );
    throw error; // Rethrow the error for the caller to handle
  }
};

export const fetchAdsTypes = async () => {
  try {
    const response = await apiClient.get("/marketPlace/ads-pricing");
    return response.data.pricingDetails;
  } catch (error) {
    console.error(
      "Error getting Ads categories:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const calculateAdPricing = async (adType, amount, amountType) => {
  try {
    const response = await apiClient.post("/marketPlace/calculate-pricing", {
      adType,
      amount,
      amountType,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error calculating ad pricing:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Create a new ad
export const createAd = async (formData) => {
  try {
    const response = await apiClient.post("/marketPlace/ads/create", formData);
    return response.data;
  } catch (error) {
    console.error("Error creating ad:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchReferralInfo = async () => {
  try {
    const response = await apiClient.get("/activity/get-referral");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching refferal info",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Transfer Referral balance
export const refferalBalanceTransfer = async (amount) => {
  try {
    const payload = { amount };
    const response = await apiClient.post(
      "/transaction/transfer-referral",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error in transfer:", error.response || error.message);
    throw error;
  }
};

export const getPosts = async (page, limit = 10) => {
  try {
    const response = await apiClient.get(
      `/post/get-posts?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getUserPosts = async (userId) => {
  try {
    const response = await apiClient.get(`/post/get-posts/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user posts:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const transferToWallet = async (amount, to) => {
  try {
    const response = await apiClient.post("/transaction/transfer", {
      amount,
      to,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error calculating ad pricing:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getStakes = async () => {
  try {
    const response = await apiClient.get("/staking/get-stakes");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching staked assets:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const stakeAsset = async (amount, plan) => {
  try {
    const response = await apiClient.post("/staking/stake", {
      amount,
      plan,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error staking asset:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getSubscribed = async () => {
  try {
    const response = await apiClient.get("/subscribe/plans");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching plans:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const subscribeToPlan = async (planName) => {
  try {
    const response = await apiClient.post("/subscribe", { planName });
    return response.data;
  } catch (error) {
    console.error(
      "Error subscribing to plan:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const becomeACreator = async (planType) => {
  try {
    const response = await apiClient.post("/subscribe/become-a-creaor", {
      planType,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating creator plan:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Fetch user profile
export const getUserProfile = async () => {
  try {
    const response = await apiClient.get("/user/profile");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (formData) => {
  try {
    const response = await apiClient.put("/user/profile-update", formData);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating user profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Delete user account
export const deleteUserAccount = async () => {
  try {
    const response = await apiClient.delete("/user/profile");
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting user account:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateProfilePicture = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("profilePicture", imageFile);

    const response = await apiClient.put("/user/profile-update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error updating profile picture:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const uploadPost = async (payload) => {
  try {
    const response = await apiClient.post("/post/upload", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error uploading post:",
      error.response?.data || error.message
    );
    throw error;
  }
};
