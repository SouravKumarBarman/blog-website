//container is a component that wraps the children components in a div with a max-width of 7xl and padding of 4
/* eslint-disable react/prop-types */
function Container({children}){
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            {children}
        </div>
    )
    
}

export default Container