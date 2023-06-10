import {AsyncPaginate} from "react-select-async-paginate";
import {useState} from "react";
import {GEO_API_URL, geoApiOptions} from "../../api";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then((response) => response.json())
            .then((response) => {
                const options = response.data ? response.data.map((city) => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}`,
                })) : [];

                return { options };
            })
            .catch((err) => {
                console.log(err);
                return { options: [] };
            });
    };




    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search