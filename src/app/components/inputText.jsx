import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
export default function InputText (props) {

    const icon = () => {
        switch (props.button) {
            case 'clear':
                return (
                    <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}}  />
                )
            case 'search':
                return (
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                )
            default:
                return <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}}  />
        }
    }

    return (
        <div className="flex justify-between">
            <input 
            type="text"
            name={props.name}
            id={props.id}
            className="outline-0 border-2 border-gray-400 hover:border-gray-200 focus:border-rose-700 rounded-s-md bg-black ease-in duration-100 text-2xl w-64" />

            { props.button ? (
                <div className="w-8 flex items-center justify-center border-y-2 border-r-2 border-gray-400 hover:border-gray-200 focus:border-rose-700 rounded-y-md rounded-r-md bg-black ease-in duration-100">
                    <button className=" w-4 h-4 text-xl flex justify-center items-center">
                        {icon()}
                    </button>
                </div>
            ) : '' }
            
            
        </div>
        
    )
}