import {useState, useEffect} from 'react';
import { UserAPI } from './apis/userApi';
const DynamicLayout = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {

            UserAPI.get().then(res => {
                setIsAuthenticated(res.isAuthenticated)
            }) 
    }, []); 

  return (
    <div>
      {isAuthenticated ? (
        <AuthenticatedLayout>{children}</AuthenticatedLayout>
      ) : (
        <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
      )}
    </div>
  );
};

const AuthenticatedLayout = ({ children }) => (
  <div>

    <header>Authenticated Header</header>
    <main>{children}</main>
    <form className="text-end" method="post" action="/logout">
      <button type="submit" className="btn btn-primary">
        Logout
      </button>
    </form>
    <footer>Authenticated Footer</footer>
  </div>
);

const UnauthenticatedLayout = ({ children }) => (
  <div>
    <header className='bg-primary py-3'>
        <div className='container'>
            <div className="row align-items-center">
                <h1 className="col text-white lh-1 m-0 fw-light">
                    Splitter
                </h1>
                <div className="col text-end">
                    <form
                    method="post"
                    action="/login/federated/google"
                    >
                        <button type="submit" className="btn btn-secondary text-white fw-medium">
                        Sign In With Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </header>
    <main className='container'>{children}</main>

    <footer className='container'>Footer</footer>
  </div>
);

export default DynamicLayout;
