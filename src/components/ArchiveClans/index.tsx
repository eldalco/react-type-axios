import {useEffect} from 'react'
import useClansByName from '../../hooks/useClansByName'

export const ArchiveClans = (): JSX.Element => {
    const {isLoadingGet, hasErrorGet, dataGet, successGet, get}= useClansByName();
    useEffect (()=> {
        get("cat")
    },[])
    
    return (
        <div>ArchiveClans</div>
    )
}
