class VisibilityToggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility:false
        }
    }

    toggleVisibility()
    {
        this.setState((prevState) =>
        {
            return {
                visibility:!prevState.visibility
            }
        });
    }


    render()
    {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'hide details' : 'show details'}</button>
                {this.state.visibility && <p>This is my details...</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () =>
// {
//     visibility = !visibility
//     render();
// }

// const appRoot = document.getElementById('app');


// const render = () =>
// {
//     const template = 
// (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>
//             {visibility ? 'hide details' : 'show details'}
//         </button>
//         {visibility && (<p>This is my details...</p>)}
//     </div>
// );

// ReactDOM.render(template,appRoot);
// }

// render();