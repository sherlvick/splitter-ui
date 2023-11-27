const LandingPage = () => {
  return (
    <>
      <form
        className="text-center"
        method="post"
        action="/login/federated/google"
      >
        <button type="submit" className="btn btn-primary">
          Sign In With Google
        </button>
      </form>
      <form className="text-end" method="post" action="/logout">
        <button type="submit" className="btn btn-primary">
          Logout
        </button>
      </form>
    </>
  );
};

export default LandingPage;
