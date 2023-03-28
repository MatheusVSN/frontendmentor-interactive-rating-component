import React from "react"

class RatingButton extends React.Component {
    static AllButtons = [];
    
    /* Initial setup for the rating button */
    constructor(props) {
        super(props);
        RatingButton.AllButtons.push(this);
        this.state = {
            active: false,
            ratingValue: this.props.RatingValue
        }
    }

    /* Triggers when user clicks */
    MouseButton1Click = () => {
        /* Sets the value to false if the button is active */
        if (this.state.active === true) {
            this.setState({
                active: false
            })
            return
        }

        if (this.state.active === false) {
            /* Checks if there is a button active that isn't the clicked object 
                If there is, then we will set the active state to false
            */
            RatingButton.AllButtons.forEach(element => {
                if (element.state.active === true) {
                    element.setState({
                        active: false
                    })
                }
            })

            /* Set the button active to true */
            this.setState({
                active: true
            })
        }
    }

    componentWillUnmount() {
        {/* Clears the AllButtons arrays */}
        RatingButton.AllButtons = RatingButton.AllButtons.filter(button => button !== this);
    }

    /* Render the rating button */
    render = () => {
        return (
            <button className={`rating-button ${this.state.active}`} onClick={this.MouseButton1Click}>
                {this.props.RatingValue}
            </button>
        )
    }
}

export default RatingButton;