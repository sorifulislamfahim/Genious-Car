import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Dragon News- ${title}`;
    }, [title])
}; 

export default useTitle; 