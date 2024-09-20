import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CountryCard from './pages/CountryCard';
import { countrySliceActions } from './pages/stores/countrySlice';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import { getCountries } from './pages/utils/api'; // Make sure this supports searching
import AlertMessage from './components/AlertMessage';

function App() {
  const loading = useSelector(state => state.country.loading);
  const error = useSelector(state => state.country.error);
  const countryData = useSelector(state => state.country.countryData);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(countryData);
  const [message,setMessage]=useState('')
  const [visible,setVisible]=useState(false)
  const [type,setType]=useState('success')

  const showAlert = (message, type = 'success') => {
    setMessage(message)
    setType(type)
    setVisible(true)
    setTimeout(() => {
      setVisible(false) 
    }, 3000); // Adjusted timeout for better visibility
  };

  useEffect(() => {
    const fetchCountries = async () => {
      dispatch(countrySliceActions.setLoading(true));

      try {
        const data = await getCountries();
        dispatch(countrySliceActions.setCountryData(data));
        setFilteredData(data); // Initialize filteredData
      } catch (error) {
        dispatch(countrySliceActions.setError("There is an error"));
      } finally {
        dispatch(countrySliceActions.setLoading(false));
      }
    };
    fetchCountries();
  }, [dispatch]);

  const handleSearch = async (searchTerm) => {
    dispatch(countrySliceActions.setLoading(true));
  
  try {
      const data = await getCountries(searchTerm);
  
      setFilteredData(data); 
      dispatch(countrySliceActions.setError(null)); 
    } catch (error) {
      dispatch(countrySliceActions.setError(error.message)); 
      showAlert("there is no country found in this name",'error')
      setFilteredData([]); 
    } finally {
      dispatch(countrySliceActions.setLoading(false));
    }
  };
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="App">
      <h1 className="app-title">Countries List</h1>
      <AlertMessage message={message} type={type} visible={visible}/>
      <Search onSearch={handleSearch} />
      <CountryCard countryData={filteredData} />
    </div>
  );
}

export default App;