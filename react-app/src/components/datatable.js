import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';

export default function DataList(){
    const [personalList, setPersonalList] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/personal/list')
        .then((response)=>{
            setPersonalList(response.data);
            console.log('çalıs');
        })
        
    }, [])

    


    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Surname',
            selector: row => row.surname,
        },
        {
            name: 'Birthplace',
            selector: row => row.birthplace,
        },
        {
            name: 'Birthday',
            selector: row => row.birtday,
        },
    ];
    
    
    
    
        return (
            <DataTable
                columns={columns}
                data={personalList}
            />
        );
   
}

