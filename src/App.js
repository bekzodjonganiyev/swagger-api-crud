import AuthenticationApp from "./AuthenticationApp";
import useToken from "./components/hook/useToken";
import UnAthenticationApp from "./UnAthenticationApp";

function App() {
    const [token] = useToken()

    if (token) {
      return <AuthenticationApp />
    }
    else {
      return <UnAthenticationApp />
    }
  }
  
export default App;
