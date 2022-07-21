import {useEffect} from 'react'
import useGetAllCharacters from '../../hooks/useGetAllCharacters'

export const ArchiveAll = (): JSX.Element => {
    const {isLoadingGet, hasErrorGet, dataGet, successGet, get}= useGetAllCharacters();
    useEffect (()=> {
        get()
    },[])
    useEffect (()=> {
        dataGet && console.log(dataGet)
    },[dataGet])
    
    return (
        <div>ArchiveClans</div>
        
    )
}
