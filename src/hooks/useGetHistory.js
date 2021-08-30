
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function useGetHistory(props) {
    const { pathname, search, hash } = useLocation()
    const history = useHistory();

    return {
        pathname,
        search,
        hash,
        history,
    }
}

export default useGetHistory;