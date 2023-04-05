export default function Button({ Rating, onClick, ActiveState }) {

    function onMouseButton1Click() {
        if (onClick) {
            onClick()
        }
    }

    return <button className={`rounded-full text-medium-grey font-bold p-5 w-14 h-14 max-[425px]:w-10 max-[425px]:h-10 grid place-content-center hover:bg-orange hover:text-white transition-all duration-200 ${ActiveState == true ? "bg-medium-grey text-white" : "bg-dark-blue-2"}`} onClick={onMouseButton1Click}>{Rating}</button>
}
