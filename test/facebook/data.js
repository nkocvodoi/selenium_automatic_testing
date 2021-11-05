module.exports = {
  url: "https://www.facebook.com/",
  testCase: {
    loginFail: {
      input: {
        username: "njktherapper@gmail.com",
        password: "kien",
      },
      expected: "password err",
    },
    loginNoPassword: {
      input: {
        username: "njktherapper@gmail.com",
        password: "",
      },
      expected: "password invalid",
    },
    loginSuccess: {
      input: {
        username: "njktherapper@gmail.com",
        password: "kien1234",
      },
      expected: "success",
    },
  },
};
