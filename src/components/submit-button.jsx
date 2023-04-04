export default function SubmitButton({ onClick }) {

    function onMouseButton1Click() {
        if (onClick) {
            onClick()
        }
    }

    return <button className="bg-orange w-full rounded-3xl h-12 text-white font-semibold hover:bg-white hover:text-orange transition-all duration-200" onClick={onMouseButton1Click}>SUBMIT</button>
}