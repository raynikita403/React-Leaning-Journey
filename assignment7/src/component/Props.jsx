import { Component } from "react";

export class Cards extends Component {

    render() {
        console.log(this.props);
        return <>
            <div
                className="d-flex ms-2 flex-column justify-content-center align-items-center bg-dark text-white p-5 rounded-4 shadow-lg"
                style={{ height: "50vh" }}
            >
                <p>Student Information</p>
                <p>Name : {this.props.Name} </p>
                <p>EmployeeId: {this.props.EmployeeId}</p>
                <p>Designation: {this.props.Designation}</p>
                <div>
                    <p>Skills:</p>
                    <ul>
                        {this.props.Skills.map((ele, index) => (
                            <li key={index}>{ele}</li>
                        ))}
                    </ul>
                </div>
                {this.props.children}
            </div>

        </>
    }
}