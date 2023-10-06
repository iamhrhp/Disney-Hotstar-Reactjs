import { useNavigate, useLocation } from 'react-router-dom';

export const withRouter = (Child: any) => {
  return (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    return <Child {...props} navigate={navigate} location={location} />;
  };
};
