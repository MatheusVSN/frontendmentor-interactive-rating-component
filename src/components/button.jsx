export default function Button({ Rating, onClick, ActiveState }) {

    function onMouseButton1Click() {
        if (onClick) {
            onClick()
        }
    }

    return <button className={`rounded-full bg-very-dark-blue text-white p-5 w-14 h-14 grid place-content-center hover:bg-orange hover:text-white transition-all duration-200 ${ActiveState == true ? "bg-medium-grey" : ""}`} onClick={onMouseButton1Click}>{Rating}</button>
}