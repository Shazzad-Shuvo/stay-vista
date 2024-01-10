import { useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'query-string'

const CategoryBox = ({ label, icon: Icon, selected }) => {
    // console.log(selected);
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClick = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString()); // params ke string e convert kore then query-string object e parse korsi.
        }
        const updatedQuery = { ...currentQuery, category: label };

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery,
        })
        navigate(url);
    }
    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-rose-600 hover:bg-orange-50 transition cursor-pointer ${selected ? 'border-b-rose-600 text-rose-600' : ''}`}>
            {<Icon size={26} />}
            <div className="text-sm font-medium">
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;