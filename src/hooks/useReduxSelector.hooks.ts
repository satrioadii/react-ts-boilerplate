import { useSelector } from 'react-redux';

const useReduxSelector = (select: string) => useSelector((state: any) => (select ? state[select] : state));

export default useReduxSelector;
