module.exports = {
  url: "https://www.facebook.com/",
  testCase: {
    loginFail: {
      input: {
        username: "njktherapper@gmail.com",
        password: "kien",
      },
      expected: true,
    },
    loginSuccess: {
      input: {
        username: "njktherapper@gmail.com",
        password: "kien1234",
      },
      expected: true,
    },
    likePost: {
      page: {
        url: "https://www.facebook.com/kien.duy.9659/",
      },
      expected: true,
    },
    searchQuery: {
      input: {
        text: "Kien Duy",
      },
      expected: 6,
    },
  },
};
