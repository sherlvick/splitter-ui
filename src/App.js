function App() {
  return (
    <form
      className="text-center"
      method="post"
      action="/login/federated/google"
    >
      <button type="submit" class="btn btn-primary">
        Sign In With Google
      </button>
    </form>
  );
}

export default App;
